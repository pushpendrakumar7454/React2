const express = require("express")
const connectDb = require("./config/db")
const userRouter = require("./router/user.router")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))
connectDb()

app.get('/', (req, res) => {
    res.send("ok got it")
})

app.use('/user', userRouter)

module.exports = app