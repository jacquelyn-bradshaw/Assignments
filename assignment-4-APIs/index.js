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

app.get("/scoreboard", (req, res) => {
  const sql = "SELECT u.name, s.score FROM scores s INNER JOIN users u ON s.user_id = u.user_id"

  pool.query(sql, (error, results) => {
    if (error) {
      console.error("Error fetching scores:", error.message)
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

app.post("/savescore", async (req, res) => {
  const {name, score} = req.body
  let user_id

  const findUser = "SELECT user_id FROM users WHERE name = ?"
  user_id = await new Promise((resolve, reject) => {
    pool.query(findUser, [name], (error, result) => {
      if (result.length == 0) {
        console.log("Error finding user")
        return res.status(500).json({error : "Database error"})
      }
      resolve(result[0].user_id)
    }) 
  })

  const sql = "INSERT INTO scores (user_id, score) VALUES (?, ?)"
  pool.query(sql, [user_id, score], (error, result) => {
    if (error) {
      console.log("Error inserting score:", error.message)
      return res.status(500).json({error : "Database error"})
    }
    res.status(201).json({id: result.insertId, message: `Score: ${score} for ${name} added successfully`})
  })
})

app.use((error, req, res, next) => {
  console.log("Error:", error.stack)
  res.status(500).json({error: "Internal Server Error"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
