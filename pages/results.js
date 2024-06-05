// import React, { useEffect, useState } from "react";
// import PouchDB from "pouchdb";
// import styles from "../assets/css/Home.module.css";
// // import mysql from "../node_modules/mysql/index.js";

// const db = new PouchDB("rcf_database");

// const Results = () => {
//   async function wipeDatabase() {
//     try {
//       // Get all the documents from the database
//       const response = await db.allDocs({ include_docs: true });

//       // Create an array of document IDs to delete
//       const docIds = response.rows.map((row) => ({
//         _id: row.doc._id,
//         _rev: row.doc._rev,
//         _deleted: true,
//       }));

//       // Bulk delete the documents
//       const result = await db.bulkDocs(docIds);

//       console.log("Database wiped successfully:", result);

//       return result;
//     } catch (error) {
//       console.error("Error wiping database:", error);
//       throw error;
//     }
//   }

//   const [dataEntries, setDataEntries] = useState([]);

//   useEffect(() => {
//     const fetchDataEntries = async () => {
//       try {
//         const response = await db.allDocs({ include_docs: true });
//         const entries = response.rows.map((row) => row.doc);
//         setDataEntries(entries);
//         console.log("Data entries fetched successfully:", entries);
//       } catch (error) {
//         console.error("Error fetching data entries:", error);
//       }
//     };

//     fetchDataEntries();
//   }, []);

//   return (
//     <>
//       {dataEntries.map((entry) => (
//         <div>
//             <button className={styles.wipeButton} onClick={wipeDatabase}>
//               Wipe Database
//             </button>
//           <div key={entry._id}>
//             <p>Username: {entry.username}</p>
//             <p>ID: {entry.id}</p>
//             <p>Score: {entry.integerValue}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// // //var mysql = require('mysql');

// // var con = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "rcf_database"
// // });

// // con.connect(function(err) {
// //     if (err) throw err;
// //     console.log("Connected!");
// //     var sql = "INSERT INTO score_sheet (candidate_name, course, score) VALUES ({entry.username}, '{entry.id}', '{entry.integerValue}')";
// //     con.query(sql, function (err, result) {
// //       if (err) throw err;
// //       console.log("1 record inserted");
// //     });
// //   });

// export default Results;


// import React, { useEffect, useState } from "react";
// import PouchDB from "pouchdb";
// import styles from "../assets/css/Home.module.css";

// const db = new PouchDB("rcf_database");

// const Results = () => {
//   async function wipeDatabase() {
//     try {
//       // Get all the documents from the database
//       const response = await db.allDocs({ include_docs: true });

//       // Create an array of document IDs to delete
//       const docIds = response.rows.map((row) => ({
//         _id: row.doc._id,
//         _rev: row.doc._rev,
//         _deleted: true,
//       }));

//       // Bulk delete the documents
//       const result = await db.bulkDocs(docIds);

//       console.log("Database wiped successfully:", result);

//       return result;
//     } catch (error) {
//       console.error("Error wiping database:", error);
//       throw error;
//     }
//   }

//   const [dataEntries, setDataEntries] = useState([]);

//   useEffect(() => {
//     const fetchDataEntries = async () => {
//       try {
//         const response = await db.allDocs({ include_docs: true });
//         const entries = response.rows.map((row) => row.doc);
//         setDataEntries(entries);
//         console.log("Data entries fetched successfully:", entries);
//       } catch (error) {
//         console.error("Error fetching data entries:", error);
//       }
//     };

//     fetchDataEntries();
//   }, []);

//   const downloadTxtFile = () => {
//     const data = dataEntries.map(entry => `Username: ${entry.username}, ID: ${entry.id}, Score: ${entry.integerValue}`).join("\n");
//     const element = document.createElement("a");
//     const file = new Blob([data], {type: 'text/plain'});
//     element.href = URL.createObjectURL(file);
//     element.download = "data.txt";
//     document.body.appendChild(element); // Required for this to work in FireFox
//     element.click();
//   }

//   return (
//     <>
//       {dataEntries.map((entry) => (
//         <div key={entry._id}>
//           <p>Username: {entry.username}</p>
//           <p>ID: {entry.id}</p>
//           <p>Score: {entry.integerValue}</p>
//         </div>
//       ))}
//       <button className={styles.wipeButton} onClick={wipeDatabase}>
//         Wipe Database
//       </button>
//       <button className={styles.downloadButton} onClick={downloadTxtFile}>
//         Download Data as TXT
//       </button>
//     </>
//   );
// };

// // export default Results;



// const express = require("express");
// const fs = require("fs");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

// app.post("/record-scores", (req, res) => {
//   const data = req.body.data; // Assuming data is sent in the format { username, id, score }

//   // Format the data for recording into the file.txt
//   const formattedData = `${data.username}, ${data.id}, ${data.score}\n`;

//   // Append the data to file.txt
//   fs.appendFile("file.txt", formattedData, (err) => {
//     if (err) {
//       console.error("Error writing to file.txt:", err);
//       res.status(500).send("Error writing to file.txt");
//     } else {
//       console.log("Data recorded successfully.");
//       res.status(200).send("Data recorded successfully.");
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// import React, { useEffect, useState } from "react";
// import styles from "../assets/css/Home.module.css";

// const Results = () => {
//   const [dataEntries, setDataEntries] = useState([]);

//   useEffect(() => {
//     const fetchDataEntries = async () => {
//       try {
//         const response = await db.allDocs({ include_docs: true });
//         const entries = response.rows.map((row) => row.doc);
//         setDataEntries(entries);
//         console.log("Data entries fetched successfully:", entries);
//       } catch (error) {
//         console.error("Error fetching data entries:", error);
//       }
//     };

//     fetchDataEntries();
//   }, []);

//   const writeToServerFile = async () => {
//     try {
//       // Prepare data to be written to the file
//       const dataToWrite = dataEntries.map(entry => `Username: ${entry.username}, ID: ${entry.id}, Score: ${entry.integerValue}`).join("\n");

//       const fs = require('fs');

//       const data = 'Hello, world!';
      
//       fs.writeFile('example.txt', dataToWrite, (err) => {
//         if (err) {
//           console.error('Error writing to file:', err);
//         } else {
//           console.log('Data written to file successfully');
//         }
//       });
      
//     } catch (error) {
//       console.error('Error writing to server file:', error);
//     }
//   };

//   return (
//     <>
//       {dataEntries.map((entry) => (
//         <div key={entry._id}>
//           <p>Username: {entry.username}</p>
//           <p>ID: {entry.id}</p>
//           <p>Score: {entry.integerValue}</p>
//         </div>
//       ))}
//       <button className={styles.writeButton} onClick={writeToServerFile}>
//         Write Data to Server File
//       </button>
//     </>
//   );
// };

// export default Results;




// import React, { useEffect, useState } from "react";
// import PouchDB from "pouchdb";
// import styles from "../assets/css/Home.module.css";

// const db = new PouchDB("rcf_database");

// const Results = () => {
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

//   const [dataEntries, setDataEntries] = useState([]);

//   useEffect(() => {
//     const fetchDataEntries = async () => {
//       try {
//         const response = await db.allDocs({ include_docs: true });
//         const entries = response.rows.map((row) => row.doc);
//         setDataEntries(entries);
//         console.log("Data entries fetched successfully:", entries);
//       } catch (error) {
//         console.error("Error fetching data entries:", error);
//       }
//     };

//     fetchDataEntries();
//   }, []);

//   const saveScore = async (username, id, score) => {
//     try {
//       // Construct the URL with parameters
//       const url = `http://localhost/rcf_db/save_score.php?username=${encodeURIComponent(username)}&id=${encodeURIComponent(id)}&score=${encodeURIComponent(score)}`;
      
//       // Make a request to the endpoint
//       const response = await fetch(url, {
//         method: "POST", // or "GET" depending on your server setup
//         // You can add more options like headers, body, etc. if needed
//       });

//       // Handle response as needed
//       console.log("Score saved successfully:", response);
//     } catch (error) {
//       console.error("Error saving score:", error);
//     }
//   };

//   return (
//     <>
//       {dataEntries.map((entry) => (
//         <div key={entry._id}>
//           <button className={styles.wipeButton} onClick={wipeDatabase}>
//             Wipe Database
//           </button>
//           <div>
//             <p>Username: {entry.username}</p>
//             <p>ID: {entry.id}</p>
//             <p>Score: {entry.integerValue}</p>
//             <button onClick={() => saveScore(entry.username, entry.id, entry.integerValue)}>
//               Save Score
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Results;







import React, { useEffect, useState } from "react";
import PouchDB from "pouchdb";
import styles from "../assets/css/Home.module.css";

const db = new PouchDB("rcf_database");

const Results = () => {
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
        // Construct the URL with parameters
        const url = `http://localhost/rcf_db/save_score.php?username=${encodeURIComponent(entry.username)}&id=${encodeURIComponent(entry.id)}&score=${encodeURIComponent(btoa(entry.integerValue))}`;
        
        // Make a request to the endpoint
        const response = await fetch(url, {
          method: "POST", // or "GET" depending on your server setup
          // You can add more options like headers, body, etc. if needed
        });

        // Handle response as needed
        console.log("Score saved successfully for", entry.username, ":", response);
      }
    } catch (error) {
      console.error("Error saving scores:", error);
    }
  };

  return (
    <>
      <button className={styles.wipeButton} onClick={wipeDatabase}>
        Wipe Database
      </button>
      <button onClick={saveAllScores}>Save All Scores</button>
      {dataEntries.map((entry) => (
        <div key={entry._id}>
          <div>
            <p>Username: {entry.username}</p>
            <p>ID: {entry.id}</p>
            <p>Score: {entry.integerValue}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Results;
