const express = require('express');
const router = express.Router();

// data about the user
let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// ----------------------------------------------- CREATE --------------------------------------------------------
// POST request: Create a new user
router.post('/', (req, res) => {
    // push => push the new element to the object
    users.push({"firstName":req.query.firstName,"lastName":req.query.lastName,"email":req.query.email,"DOB":req.query.DOB});

    res.send("The user" + (' ')+ (req.query.firstName) + " Has been added!");
});

// to create new user in our existing users data U have to pass query like this
// 'localhost:5000/user?firstName=Rohit&lastName=Chaware&email=rohitchaware23@gmail.com&DOB=10/10/1995'


// ------------------------------------------ RETRIVE ------------------------------------------------------------
// GET request: Retrieve all users
router.get('/', (req, res) => {
    res.send(JSON.stringify({users},null,4));
})

// GET by specific ID request: Retrieve a single user with email ID
// to get the desired user U have to pass the specified EmailID associated to that user
router.get('/:email', (req, res) => {
    // retrive the EmailId from the request 
    // we use params to get the data from the URL
    const email = req.params.email;
    // filter => filter the data based on particular condition
    // hre condition is user.email === email
    const userAssociated = users.filter((user) => user.email === email);
    res.send(userAssociated);
});

// ------------------------------------------------ UPDATE -------------------------------------------------------
// PUT request => Update the user
router.put('/:email', (req, res) => {
    const email = req.params.email;
    let filteredUsers = users.filter((user) => user.email === email);

    // if user is present
    if (filteredUsers.length > 0) {
        // if there are more than 1 users are there with same EmaiID
        let filtredUser = filteredUsers[0];

        // get new values
        let DOB = req.query.DOB;
        let firstName = req.query.firstName;
        let lastName = req.query.lastName;

        // if user wants to change the DOB
        if (DOB) {
            filtredUser.DOB = DOB;
        }
        if (firstName) {
            filtredUser.firstName = firstName;
        }
        if (lastName) {
            filtredUser.lastName = lastName;
        }

        // updating our users JSON object
        // getting unchanged values
        users = users.filter((user) => user.email !== email);
        users.push(filtredUser);
        res.send(`User with the email  ${email} updated.`);

    } else {
        res.send("Unable to find the user");
    }
});

// ------------------------------------------------- DELETE ------------------------------------------------------
// DELETE request => Delete the particular user
router.delete('/:email', (req, res) => {
    const email = req.params.email;
    users = users.filter((user) => user.email !== email);
    res.send(`User with email ${email} deleted`);
});

module.exports = router;