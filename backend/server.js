import express from "express"
import mysql from "mysql"


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
})

app.get("/", (req,res) => {
    res.json("Moshi Moshi 🧍🏾‍♂️")
})

app.listen(8800,()=>{
    console.log("Connected to backend")
})

