import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../assets/css/styles.module.css";
import lottieCongrats from './../assets/lottie/completed.json';
import React, { useEffect, useState } from "react";
import bg from './../assets/img/Auth.jpg';
import { Player } from '@lottiefiles/react-lottie-player';
import rcf from './../assets/img/rcf_logo_172_X_155 tp 2.png';
import PouchDB from "pouchdb";

const db = new PouchDB("rcf_database");

const Results = () => {
  const router = useRouter();
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    // Extract IP address from the URL in the browser
    const ipAddress = window.location.hostname;
    setIpAddress(ipAddress);
  }, []);

  async function wipeDatabase() {
    try {
      const response = await db.allDocs({ include_docs: true });
      const docIds = response.rows.map((row) => ({
        _id: row.doc._id,
        _rev: row.doc._rev,
        _deleted: true,
      }));
      const result = await db.bulkDocs(docIds);
      console.log("Database wiped successfully:", result);
      return result;
    } catch (error) {
      console.error("Error wiping database:", error);
      throw error;
    }
  }

  const [dataEntries, setDataEntries] = useState([]);

  useEffect(() => {
    const fetchDataEntries = async () => {
      try {
        const response = await db.allDocs({ include_docs: true });
        const entries = response.rows.map((row) => row.doc);
        setDataEntries(entries);
        console.log("Data entries fetched successfully:", entries);
      } catch (error) {
        console.error("Error fetching data entries:", error);
      }
    };

    fetchDataEntries();
  }, []);

  const saveAllScores = async () => {
    try {
      // Loop through each entry and save the score
      for (const entry of dataEntries) {
        // Construct the URL with parameters using the retrieved IP address
        const url = `http://${ipAddress}/rcf_db/save_score.php?username=${encodeURIComponent(
          entry.username
        )}&id=${encodeURIComponent(entry.id)}&score=${encodeURIComponent(
          btoa(entry.integerValue)
        )}`;

        // Make a request to the endpoint
        const response = await fetch(url, {
          method: "POST", // or "GET" depending on your server setup
          // You can add more options like headers, body, etc. if needed
        });

        // Handle response as needed
        console.log(
          "Score saved successfully for",
          entry.username,
          ":",
          response
        );
      }

      // Redirect to login.js after saving all scores
      router.push("/login");
    } catch (error) {
      console.error("Error saving scores:", error);
    }
  };

  return (
    <>
      <div className={styles.congrats} >
        <Head>
          <link rel="icon" href="rcf_logo_172_X_155.png" />
          <title>CONGRATULATIONS</title>
        </Head>


        <div className={styles.congBG} style={{
          position: "absolute",
          top: 0,
          left:0,
          right:0,
          bottom: 0,
          zIndex: -1,
          background: `url("${bg.src}")`,
	        backgroundSize: "contain",
          backgroundRepeat: "repeat",

        }}>
        </div>
        <div className={styles.congHeader}>
          <img
            className={styles.logo}
            // onClick={() => (window.location.href = "quizphy113")}
            src={rcf.src}
            alt="RCF_Logo"
            width="70"
            // height="48"
          />
          {/* <div className={styles.user_info}> */}
            {/* <div className={styles.timer}>Elapsed */}
            {/* <CountdownTimer/> */}
            {/* <p>status</p> */}
            {/* <p>{autoSubmitted}</p> */}
            {/* </div> */}
            {/* <img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/> */}
            {/* <div>
				<span className={styles.userid}>ID</span><br/>
				<span className={styles.user}>Name</span>
			</div> */}
          {/* </div> */}
        </div>

        <div className={styles.congframe}>
        <Player
            autoplay
            loop
            src={lottieCongrats}
            style={{ height: '150px', width: '150px' }} />
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column'
        }}>
          <div style={{
            paddingBlock: '10px',
            fontSize: "30px",
            fontWeight: 600,
            fontFamily: ""
          }}>
            WELL DONE!
          </div>
          <div style={{
            paddingBlock: '10px',
          }}>
            You've successfully completed your quiz.
          </div>
        </div>

        <div style={{ color: "red", marginTop: "20px" }}>
          Make sure to click <b>Close</b> before leaving.
        </div>
        
        <button className={styles.loginbtn} onClick={saveAllScores}>
          Close
        </button>
          {/* <button className={styles.loginbtn} onClick={wipeDatabase}>Wipe Database</button> */}
        </div>
      </div>

      {dataEntries.map((entry) => (
        <div key={entry._id}>
          <div>
            {/* <p>Username: {entry.username}</p>
            <p>ID: {entry.id}</p>
            <p>Score: {entry.integerValue}</p> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Results;

// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import styles from '../assets/css/styles.module.css';
// import React, { useEffect, useState } from "react";
// import PouchDB from "pouchdb";

// const db = new PouchDB("rcf_database");

// const Results = () => {
//   const router = useRouter();
//   const [ipAddress, setIpAddress] = useState('');
//   const [dataEntries, setDataEntries] = useState([]);

//   useEffect(() => {
//     // Extract IP address from the URL in the browser
//     const ipAddress = window.location.hostname;
//     setIpAddress(ipAddress);

//     // Fetch data entries and save all scores
//     fetchDataEntriesAndSaveScores();
//   }, []); // Empty dependency array ensures this effect runs only once on mount

//   async function fetchDataEntriesAndSaveScores() {
//     try {
//       const response = await db.allDocs({ include_docs: true });
//       const entries = response.rows.map((row) => row.doc);
//       setDataEntries(entries);
//       console.log("Data entries fetched successfully:", entries);

//       // Save all scores
//       saveAllScores(entries);
//     } catch (error) {
//       console.error("Error fetching data entries:", error);
//     }
//   }

//   const saveAllScores = async (entries) => {
//     try {
//       // Loop through each entry and save the score
//       for (const entry of entries) {
//         // Construct the URL with parameters using the retrieved IP address
//         const url = `http://${ipAddress}/rcf_db/save_score.php?username=${encodeURIComponent(entry.username)}&id=${encodeURIComponent(entry.id)}&score=${encodeURIComponent(entry.integerValue)}`;

//         // Make a request to the endpoint
//         const response = await fetch(url, {
//           method: "POST", // or "GET" depending on your server setup
//           // You can add more options like headers, body, etc. if needed
//         });

//         // Handle response as needed
//         console.log("Score saved successfully for", entry.username, ":", response);
//       }

//       // Redirect to login.js after saving all scores
//       //router.push('/login');
//     } catch (error) {
//       console.error("Error saving scores:", error);
//     }
//   };

//   async function wipeDatabase() {
//     try {
//       const response = await db.allDocs({ include_docs: true });
//       const docIds = response.rows.map((row) => ({
//         _id: row.doc._id,
//         _rev: row.doc._rev,
//         _deleted: true,
//       }));
//       const result = await db.bulkDocs(docIds);
//       console.log("Database wiped successfully:", result);
//       return result;
//     } catch (error) {
//       console.error("Error wiping database:", error);
//       throw error;
//     }
//   }

//   return (
//     <>
//       <div className={styles.body}>
//         <Head>
//           <link rel="icon" href="rcf_logo_172_X_155.png" />
//           <title>Congratulation</title>
//         </Head>

//         <div className={styles.header}>
//           <img className={styles.logo} onClick={() => window.location.href = "quizphy113"} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
//           <div className={styles.user_info}>
//             <div className={styles.timer}>Elapsed</div>
//             <img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
//             <div>
//               <span className={styles.userid}>ID</span><br/>
//               <span className={styles.user}>Name</span>
//             </div>
//           </div>
//         </div>

//         <div className={styles.congframe}>
//           <div className={styles.xmage}>
//             <img style={{width: '200px', height: '100px', align: 'center', top: '50%', left: '50%', margin:'0px auto'}} src="shine.png" alt="Congratulation" />
//           </div>
//           <div style={{
//             fontFamily: 'Satoshi',
//             fontStyle: 'normal',
//             fontWeight: 500,
//             fontSize: '24px',
//             lineHeight: '32px',
//             textAlign: 'center',
//             padding: '20px',
//             borderRadius: '4px'
//           }}>Congratulation on the successful completion of your quiz</div>
//           <button className={styles.loginbtn} onClick={() => window.location.href = "login"}>Close</button>
//           {/* <button className={styles.loginbtn} onClick={wipeDatabase}>Wipe Database</button> */}
//           {/* <div style={{color:'red', top:'20px'}}>Ensure you click close before leaving</div> */}
//         </div>
//       </div>

//       {dataEntries.map((entry) => (
//         <div key={entry._id}>
//           {/* <div>
//             <p>Username: {entry.username}</p>
//             <p>ID: {entry.id}</p>
//             <p>Score: {entry.integerValue}</p>
//           </div> */}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Results;
