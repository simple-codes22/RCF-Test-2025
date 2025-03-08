import React, { useState, useEffect } from "react";
import styles from "../assets/css/Home.module.css";
import { clearAllCookies } from '../pages/api/cookieUtils';
import PouchDB from 'pouchdb';

const db = new PouchDB('rcf_database');

async function saveDataEntry(username, id, integerValue) {
  try {
    const entryId = new Date().toISOString();
    const dataEntry = {
      _id: entryId,
      username,
      id,
      integerValue,
    };

    const response = await db.put(dataEntry);

    console.log('Data entry saved successfully:', response);

    return response;
  } catch (error) {
    console.error('Error saving data entry:', error);
    throw error;
  }
}

const Quiz = ({ quizData, autoSubmitted, setAutoSubmitted, name, id }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0); 
  const [answers, setAnswers] = useState(new Array(quizData.questions.length).fill(""));
  const [errorstate, setErrorState] = React.useState('white');
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('savedAnswers'));
    if (savedAnswers) {
      setAnswers(savedAnswers);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('savedAnswers', JSON.stringify(answers));
  }, [answers]);
  
  const handleNum = (num) => {
    setCurrentQuestion(num);
  }
  
  const handleNext = () => {
    setCurrentQuestion(prevQuestion => prevQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(prevQuestion => prevQuestion - 1);
  };

  const handleAnswerSelect = (event) => {
    const selectedAnswer = event.target.value;
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestion] = selectedAnswer;
      return updatedAnswers;
    });
  };

  const handleQuizSubmit = () => {
    const answeredQuestions = answers.filter(answer => answer !== "").length;
    if (answeredQuestions >= 1) {
      let calculatedScore = 0;
      
      answers.forEach((answer, index) => {
        if (answer === quizData.questions[index].answer) {
          calculatedScore++;
        }
      });
  
      setScore(calculatedScore);
      saveDataEntry(name, id, calculatedScore);
    
      setTimeout(() => {
        window.location.href = "congrat";
      }, 0);
      clearAllCookies();
      setAutoSubmitted(false);

      // Clear answers after submission
      setAnswers(new Array(quizData.questions.length).fill(""));
      localStorage.removeItem('savedAnswers');
    } else {
      setErrorState('red');
    }
  };

  const handleQuizReset = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(quizData.questions.length).fill(""));
    setScore(0);
    setShowScore(false);
  };

  if (quizData.questions.length === 0) {
    return <p>No questions found.</p>;
  } else {
  //console.log("auto complete", autoSubmitted)
};

if (autoSubmitted) {
  //triggered if time is autocompleted
  handleQuizSubmit();
  // console.log("completed:", autoSubmitted);

  // let calculatedScore = 0;

  // answers.forEach((answer, index) => {
  //     if (answer === quizData.questions[index].answer) {
  //       calculatedScore++;
  //     }
  //   });
  // setScore(calculatedScore);
  // saveDataEntry(name, id, calculatedScore);

  // setTimeout(() => {
  //     // redirect to congrats page
  //    // window.location.href = "congrat";
  //   }, 0);
  // clearAllCookies();
  // setAutoSubmitted(false);      
  // //end of autocomplete

  //  // Clear answers after submission
  //  setAnswers(new Array(quizData.questions.length).fill(""));
  //  localStorage.removeItem('savedAnswers'); 
};

  const backgroundColors = answers.map((answer, index) => answer !== "" ? '#353275' : '#ecf2f6');

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
      {showScore ? (
        <div>
          <h2>{`You scored ${score} out of ${quizData.questions.length}`}</h2>
        </div>
      ) : (
        <div className={styles.examQuestion}>
          <h2 dangerouslySetInnerHTML={{ __html: quizData.questions[currentQuestion].question.replace(/\n/g, '<br>') }} />
          <div className={styles.questionLi}>
            {quizData.questions[currentQuestion].options.map(
              (option, index) => (
                <div className={styles.li} key={index} style={{
                  marginBlock: "20px",
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    paddingBlock: "17px",
                    border: '1.2px solid #e6e5fa',
                    paddingInline: '14px',
                    borderRadius: '10px',
                    transition: 'all .1s ease-in-out',
                    backgroundColor: answers[currentQuestion] === option ? '#353275' : 'initial',
                    color: answers[currentQuestion] === option ? 'white' : 'initial',
                  }}>
                    <input
                      type="radio"
                      className={styles.radio}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={handleAnswerSelect}
                    />
                    <div style={{paddingLeft: "20px", display: 'inline'}}>
                      {option}
                    </div>
                  </label>
                </div>
              )
            )}
          </div>
          
          <div style={{
            display: 'flex',
            // justifyContent: 'space-between',
            marginTop: '20px',
            alignSelf: 'center'
          }}>
            <button className={styles.prevBtn} onClick={handlePrev} disabled={currentQuestion === 0}>Previous</button>
            {currentQuestion === quizData.questions.length - 1 ? (
              <button className={styles.subBtn} onClick={handleQuizSubmit}>Submit</button>
            ) : (
              <button className={styles.nextBtn} onClick={handleNext}>Next</button>
            )}
          </div>

        </div>
      )}
      <div className={styles.progress_box}>
        <div className={styles.progress_content}>
          <div className={styles.progress_row}>
            {backgroundColors.map((color, index) => (
              <div key={index} onClick={() => {handleNum(index)}} className={styles.progress_num} style={{ backgroundColor: color, color: color == "#353275" ? "white" : "black", border: color == "#ecf2f6" ? "1.7px solid #e0dfff" : "none" }}>{index + 1}</div>
            ))}
          </div>
          <p style={{color: errorstate}}>Ensure you answer all questions before submitting.</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const name = context.req.cookies.name || '';
  const id = context.req.cookies.id || '';

  if (!id) {
    if (context.res) {
      context.res.setHeader('Location', '/login');
      context.res.statusCode = 302;
      context.res.end();
    } else {
      window.location.href = '/';
    }
  }

  return {
    props: {
      name,
      id,
    },
  };
};

export default Quiz;