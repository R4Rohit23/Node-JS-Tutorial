const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

const secretKey = "mySecretKey"

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Success")
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const accessToken = jwt.sign({user: username, password: password}, secretKey, { expiresIn: 60 * 60});

    res.send(accessToken)
})

app.listen(3000, () => console.log("Server running on port 3000"))
