var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rcf_database"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO score_sheet (candidate_name, course, score) VALUES ('Onare Daniel Tayo', 'CME515', '79')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require('mysql2');

// const app = express();
// const port = 3001;

// // Replace these database connection details with your own
// const dbConfig = {

//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "rcf_database",

// };

// app.use(bodyParser.json());

// app.post("/api/submit-score", async (req, res) => {
//   try {
//     const { score } = req.body;

//     // Create a MySQL connection
//     const connection = await mysql.createConnection(dbConfig);

//     // Insert the score into the database
//     const [results] = await connection.execute("INSERT INTO score_sheet (score) VALUES (?)", [score]);

//     // Close the connection
//     await connection.end();

//     console.log("Score inserted into MySQL database:", results);

//     res.json({ success: true, message: "Score submitted successfully" });
//   } catch (error) {
//     console.error("Error handling score submission:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
