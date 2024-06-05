// pages/api/submit-score.js
var mysql = require('mysql');

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { score } = req.body;

    // Replace these with your actual MySQL credentials
    var connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "rcf_database",
    });

    await connection.execute("INSERT INTO score_sheet (score) VALUES (?)", [score]);

    await connection.end();

    console.log("Score saved to MySQL database successfully");

    res.status(200).json({ success: true, message: "Score submitted successfully" });
  } catch (error) {
    console.error("Error handling score submission:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
