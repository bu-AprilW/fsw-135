const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect("mongodb://localhost:27017/Inventory",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connected to DB!")
)

mongoose.connection.on('connected', () => {
    console.log("Mongo is connected!")
})

app.get("/", (req, res) => {
    res.status(200).send("Hello!")
})

app.listen(9000, () => {
    console.log("Server is running on Port 9000")
})