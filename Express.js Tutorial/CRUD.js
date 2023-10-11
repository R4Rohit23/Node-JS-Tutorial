// explaining CRUD operation on particular endpoint

const express = require('express')
const app = express()
// importing router
const route = require('./CRUD_router.js')
const port = 3000

// When data is sent to an API/Server, it is sent as a string. Before the server can use this information, it needs to be converted into a JavaScript object. This process is called parsing.
// express.json(): This is a method inbuilt in express to recognize the incoming request object as a JSON Object. This method is called as a middleware in your application using the code: 
app.use(express.json())


// creating router to handle the endpoint at '/user'
app.use('/users', route)

app.get('/', (req, res) => {
    res.send("In CRUD.js")
})

app.listen(port, () => console.log("Listening on port 3000"))