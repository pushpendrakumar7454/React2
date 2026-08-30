const express = require("express")
const connectDb = require("./config/db")
const userRouter = require("./router/user.router")

const app = express()

app.use(express.json())
connectDb()

app.get('/', (req, res) => {
    res.send("ok got it")
})

app.use('/user', userRouter)

module.exports = app