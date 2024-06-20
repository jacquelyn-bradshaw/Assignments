const express = require("express")
const mysql = require("mysql2")
const path = require('path')
require('dotenv').config()
const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("assignment-4-APIs/public"))

const pool = mysql.createPool ({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const filePathIndex = path.resolve(__dirname, 'index.html');

app.get("/", (req, res) => {
  res.sendFile(filePathIndex)
})

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users"

  pool.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching users:", error.message)
      return res.status(500).json({error: "Database error"})
    }
    res.status(200).json(results)
  })
})

app.post("/saveuser", (req, res) => {
  const {name} = req.body

  const sql = "INSERT INTO users (name) VALUES (?)"
  pool.query(sql, [name], (error, result) => {
    if (error) {
      console.log("Error inserting user:", error.message)
      return res.status(500).json({error : "Database error"})
    }
    res.status(201).json({id: result.insertId, message: `User ${name} created successfully`})
  })
})

app.use((error, req, res, next) => {
  console.log("Error:", error.stack)
  res.status(500).json({error: "Internal Server Error"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
