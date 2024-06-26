const express = require("express")
const pool = require("./pool") // Imports the file where I created my MySQL connection pool
const path = require("path")
require("dotenv").config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

// this enables the use of static files e.g CSS file
app.use(express.static("assignment-4-APIs/public"))



// creates a path to a file
const filePathIndex = path.resolve(__dirname, "index.html");

app.get("/", (req, res) => {
  try {
    res.status(200).sendFile(filePathIndex)
  } catch (error) {
    console.error("Error sending file", error.message)
    res.status(500).json({error: "Internal Server Error"})
  }
})

app.get("/users", async(req, res) => {
  try {
    const sql = `
      SELECT
        *
      FROM
        users
    `
    const [results] = await pool.query(sql)
    res.status(200).json(results)
  } catch (error) {
    console.error("Error fetching users:", error.message)
    res.status(500).json({error: "Database error"})
  }
})

app.get("/scoreboard", async(req, res) => {
  try {
    const sql = `
      SELECT
        u.name,
        s.score
      FROM
        scores s
        INNER JOIN users u ON s.user_id = u.user_id
    `
    const [results] = await pool.query(sql)
    res.status(200).json(results)
  } catch (error) {
    console.error("Error fetching score:", error.message)
    res.status(500).json({error: "Database error"})
  }
})

app.post("/users", async(req, res) => {
  const {name} = req.body

  if (!name) {
    console.log("Missing name")
    return res.status(400).json({message: "Please include a name"})
  }

  try {
    const findUser = "SELECT user_id FROM users WHERE name = ?"
    const [findUserResult] = await pool.query(findUser, [name])
    
    if (findUserResult.length !== 0) {
      console.log("User already exists")
      return res.status(400).json({error: "User already exists"})
    }

    const sql = "INSERT INTO users (name) VALUES (?)"
    const [results] = await pool.query(sql, [name])
    res.status(201).json({id: results.insertId, message: `User ${name} created successfully`})
  } catch (error) {
    console.log("Error inserting user:", error.message)
    res.status(500).json({error : "Database error"})
  }
})

app.post("/scoreboard", async(req, res) => {
  const {name, score} = req.body

  if (!name || !score) {
    console.log("Missing name or score")
    return res.status(400).json({message: "Please include a name and score"})
  }

  try {
    const findUser = "SELECT user_id FROM users WHERE name = ?"
    const [findUserResult] = await pool.query(findUser, [name])
    
    if (findUserResult.length === 0) {
      console.log("Error finding user")
      return res.status(404).json({error: "User not found"})
    }

    const userId = findUserResult[0].user_id

    const sql = "INSERT INTO scores (user_id, score) VALUES (?, ?)"
    const [results] = await pool.query(sql, [userId, score])

    res.status(201).json({id: results.insertId, message: `A score of ${score} for ${name} has been added successfully`})
  } catch (error) {
    console.log("Error inserting scores:", error.message)
    res.status(500).json({error: "Database error"})
  }
})

app.delete("/scoreboard/:id", async(req, res) => {
  const scoreId = req.params.id

  if (isNaN(scoreId)) {
    console.log("score_id is not a number")
    return res.status(400).json({message: "Please include a number for the score_id in the path"})
  }

  try {
    const sql = "DELETE FROM scores WHERE score_id = ?"
    const [results] = await pool.query(sql, [scoreId])

    if (results.affectedRows === 0) {
      console.log("Error finding score")
      return res.status(404).json({error: "Score not found"})
    }

    res.status(200).json({message: "Score deleted successfully"})
  } catch (error) {
    console.log("Error deleting score:", error.message)
    res.status(500).json({error: "Database error"})
  }
})

app.use((error, req, res, next) => {
  console.log("Error:", error.stack)
  res.status(500).json({error: "Internal Server Error"})
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
