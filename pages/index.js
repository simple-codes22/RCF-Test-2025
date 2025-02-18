// import Head from 'next/head';
// import { GetServerSideProps } from 'next';
// import { parse } from 'cookie';
// import styles from '../assets/css/styles.module.css';

// const SelectCourse = () => {
//   return (
// 	<div className={styles.body}>
// 		<Head>
// 			<link rel="icon" href="/rcf_logo_172_X_155.png" />
// 			<title>Select Course</title>
// 		</Head>
// 		<div className={styles.header}>
// 			<img className={styles.logo} src="/rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
// 			{/* <div className={styles.user_info}>
// 			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
// 			<div>
// 				<span className={styles.userid}>User ID</span><br/>
// 				<span className={styles.user}>12345-BBX</span>
// 			</div>
// 		</div> */}
		
// 		<div className={styles.user_info}>
// 			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
// 			<div>
// 				<span className={styles.userid}>id</span><br/>
// 				<span className={styles.user}>Name</span>
// 			</div>
// 		</div>

//       </div>
// 	  <h3 className={styles.instruction}>Select a Course to take Quiz</h3>
//     <div className={styles.container}>
      
//       <div className={styles.row}>
//         <div className={styles.col}>
// 			<div className={styles.left}>
// 				<img className={styles.course_icon} src="/rcf_logo_172_X_155.png" alt="Logo" />
// 			</div>
// 			<div className={styles.right}>
// 				<text className={styles.course_name}>CHM 101<br/></text>
// 				20 Questions in 15 Minutes<br/>
// 				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizchm111"}>Start Quiz</button>
// 			</div>
// 		</div>
// 		   <div className={styles.col}>
// 			<div className={styles.left}>
// 				<img className={styles.course_icon} src="/rcf_logo_172_X_155.png" alt="Logo" />
// 			</div>
// 			<div className={styles.right}>
// 			<text className={styles.course_name}>PHY 101<br/></text>
// 				20 Questions in 20 Minutes<br/>
// 				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizphy113"}>Start Quiz</button>
// 			</div>
// 		</div>
//       </div>
//       <div className={styles.row}>
// 			<div className={styles.col}>
// 				<div className={styles.left}>
// 					<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
// 				</div>
// 				<div className={styles.right}>
// 					<text className={styles.course_name}>MAT 101<br/></text>
// 					20 Questions in 20 Minutes<br/>
// 					<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmat111"}>Start Quiz</button>
// 				</div>
// 			</div>
// 			<div className={styles.col}>
// 			<div className={styles.left}>
// 				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
// 			</div>
// 			<div className={styles.right}>
// 				<text className={styles.course_name}>MAT 113<br/></text>
// 				20 Questions in 20 Minutes<br/>
// 				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmat112"} disabled>Start Quiz</button>
// 			</div>
// 		</div>
//       </div>
      {/* <div className={styles.row}>
               <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
			<text className={styles.course_name}>STA 117<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizsta117"}>Start Quiz</button>
			</div>
		</div>
		<div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			{<div className={styles.right}>
				<text className={styles.course_name}>TEST<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmattest"}>Start Quiz</button>
			</div> }
		</div>
      </div> */}
//     </div>
// 	</div>
//   );
// };


// export const getServerSideProps = async (context) => {
// 	console.log("fetching cookies");
// 	// Read cookies from the request headers
// 	const cookies = parse(context.req.headers.cookie || '');
  
// 	// Access individual cookie values
// 	const name = cookies.name || '';
// 	const id = cookies.id || '';
  
// 	console.log("name:", name);
// 	console.log("id:", id);
  
// 	if (!id) {
// 	  // Cookie is not present
// 	  if (context.res) {
// 		// If running on the server-side, redirect to index page
// 		context.res.setHeader('Location', '/login');
// 		context.res.statusCode = 302;
// 		context.res.end();
// 	  } else {
// 		// If running on the client-side, redirect to index page
// 		window.location.href = '/';
// 	  }
// 	}
  
// 	// Pass the cookie values as props
// 	return {
// 	  props: {
// 		name,
// 		id,
// 	  },
// 	};
//   };
// export default SelectCourse;




import Head from 'next/head';
import { parse } from 'cookie';
import styles from '../assets/css/styles.module.css';


const SelectCourse = ({ name, id }) => {
	const disableChm101 = id.toLowerCase() !== 'chm101';// Not Done TEST
	const disablePhy101 = id.toLowerCase() !== 'phy101';// Not Done TEST
	const disableMat101 = id.toLowerCase() !== 'mat101';// Not Done TEST
	// const disableMat113 = id.toLowerCase() !== 'mat113';
	// const disablePhy103 = id.toLowerCase() !== 'phy103';	

  return (
    <div className={styles.body} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Head>
        <link rel="icon" href="/rcf_logo_172_X_155.png" />
        <title>READ THE INSTRUCTIONS CAREFULLY</title>
      </Head>
      <div className={styles.header}>
        <img className={styles.logo} src="/rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
        <div className={styles.user_info}>
			<div className={styles.time}>
				<button className={styles.Logout} onClick={() => window.location.href = "login"}>Log Out</button>
			</div>
          	<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
          <div>
            <span className={styles.userid}>{id}</span><br/>
            <span className={styles.user}>{name}</span>
          </div>
        </div>
      </div>
	  <div style={{display: 'flex', textAlign: "center", width: "100%", justifyContent: 'center'}}>
      	<h3 className={styles.instruction}>Read the Instructions Carefully</h3>
	  </div>
      <div className={styles.container} style={{maxWidth: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
		<div>

			Before you begin your quiz, please take a moment to read the instructions <b>carefully.</b>

			<ul>

				<li style={{marginBlock: "10px"}}><b>CHM101:</b> Pay attention to chemical equations and units. Precision matters!</li>
				<li style={{marginBlock: "10px"}}><b>MAT101:</b> Double-check your calculations and formulas. A small mistake can change everything.</li>
				<li style={{marginBlock: "10px"}}><b>PHY101:</b> Read each question thoroughly—sometimes, the key to solving it is in the details.</li>
			
			</ul>  

			<div>
				🎯 <i>"Success is the sum of small efforts, repeated day in and day out."</i> – Robert Collier
			</div>

			<div style={{marginTop: "20px"}}>
				Good luck! 🚀
			</div>
		</div>

		<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "chm101"} disabled={false}>Start Quiz</button>
        
		   {/* <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="/rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
			<text className={styles.course_name}>PHY 101<br/></text>
			<em className={styles.ctitle}>General Physics I</em>
				20 Questions in 20 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "phy101"} disabled={disablePhy101}>Start Quiz</button>
			</div>
		</div> */}
      {/* </div> */}
	  {/* <div className={styles.row}>
			<div className={styles.col}>
				<div className={styles.left}>
					<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
				</div>
				<div className={styles.right}>
					<text className={styles.course_name}>MAT 101<br/></text>
					<em className={styles.ctitle}>Elementary Mathematics  I</em>
					20 Questions in 20 Minutes<br/>
					<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "mat101"} 
					// disabled={disableMat101}
						>Start Quiz</button>
				</div>
			</div> */}
			{/* <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>MAT 113<br/></text>
				<em className={styles.ctitle}>Elementary Mathematics III</em>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmat112"} disabled={disableMat113}>Start Quiz</button>
			</div> */}
		{/* </div> */}
      </div>
	  	{/* <div className={styles.row}>
            <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
			<text className={styles.course_name}>PHY 103<br/></text>
			<em className={styles.ctitle}>General Physics II</em>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizphy103"} disabled={disablePhy103}>Start Quiz</button>
			</div>
		</div>
		<div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
			<text className={styles.course_name}>STA 117<br/></text>
			<em className={styles.ctitle}>Statistics</em>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizsta117"}>Start Quiz</button>
			</div>
		</div>
      </div> */}
    {/* <div className={styles.row}>
               <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
			<text className={styles.course_name}>STA 117<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizsta117"}>Start Quiz</button>
			</div>
		</div>
		<div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			{<div className={styles.right}>
				<text className={styles.course_name}>TEST<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmattest"}>Start Quiz</button>
			</div> }
		</div>
      </div> */}
      </div>
    // </div>
  );
};

export const getServerSideProps = async (context) => {
  console.log("fetching cookies");
  // Read cookies from the request headers
  const cookies = parse(context.req.headers.cookie || '');
  
  // Access individual cookie values
  const name = cookies.name || '';
  const id = cookies.id || '';
  
  console.log("name:", name);
  console.log("id:", id);
  
  if (!id) {
    // Cookie is not present
    if (context.res) {
      // If running on the server-side, redirect to index page
      context.res.setHeader('Location', '/login');
      context.res.statusCode = 302;
      context.res.end();
    } else {
      // If running on the client-side, redirect to index page
      window.location.href = '/';
    }
  }
  
  // Pass the cookie values as props
  return {
    props: {
      name,
      id,
    },
  };
};

export default SelectCourse;
