const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const app = express();

let users = []

app.use(express.json());
app.use(session({secret:"fingerpint"}))

//Function to check if the user exists
// You need to provide a manner in which it can be checked to see if the username exists in the list of registered users, to avoid duplications and keep the username unique. This is a utility function and not an endpoint.
const doesExist = (username) =>{
  let usersWithSameName = users.filter((user)=>{
    return user.username === username
  });
  if(usersWithSameName.length > 0){
    return true;
  } else {
    return false;
  }
}

//Function to check if the user is authenticated
const authenticatedUser = (username,password)=>{
  let validusers = users.filter((user)=>{
    return (user.username === username && user.password === password)
  });
  if(validusers.length > 0){
    return true;
  } else {
    return false;
  }
}

app.get("/", (req, res) => {
  res.send(users);
})

app.use("/auth", function auth(req,res,next){
   if(req.session.authorization) { //get the authorization object stored in the session
       token = req.session.authorization['accessToken']; //retrieve the token from authorization object
       jwt.verify(token, "access",(err,user)=>{ //Use JWT to verify token
           if(!err){
               req.user = user;
               next();
           }
           else{
               return res.status(403).json({message: "User not authenticated"})
           }
        });
    } else {
        return res.status(403).json({message: "User not logged in"})
    }
});

// ------------------------------------------------------- Login ------------------------------------------------------------
app.post("/login", (req,res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (!username || !password) {
      return res.status(404).json({message: "Error logging in"});
  }

  if (authenticatedUser(username,password)) {
    // JWT.sign() => Used to create a JSON Web Token
    // The jwt.sign function takes three arguments:
    // (1) Payload: The payload is a JavaScript object that contains the data you want to include in the JWT. 
    const payload = {
      username : username,
      password: password,
    }
    // (2) Secret Key: The secret key is used to sign the JWT and verify its integrity. The secret key is a string that should be kept secret and only known to the parties involved (the server generating the token and the server or client verifying it).
    const secretKey = "mySecretKey";

    // (3) This is optional argument
    // Here expiresIn is the optional argument which tells the duration after which the token will expire

    let accessToken = jwt.sign(payload, secretKey , { expiresIn: 60 * 60 });

    req.session.authorization = {
      accessToken,username
    }
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(400).json({message: "Invalid Login. Check username and password"});
  }
});

// ---------------------------------------------------- Registration -------------------------------------------------------
app.post("/register", (req,res) => {
  // Get the username and password from the URL as a query parameter
  const username = req.query.username;
  const password = req.query.password;

  if (username && password) {
    // Check if user is already exist or not
    if (!doesExist(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

app.get("/auth/get_message", (req,res) => {
  return res.status(200).json({message: "Hello, You are an authenticated user. Congratulations!"});
})


app.listen(3000,()=>console.log("Server is running on port 3000"));
