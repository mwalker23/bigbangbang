const router = require('express').Router();
const { User } = require('../../models');
// localhost:3001/users
router.get('/', (req, res) => {
    res.json("From the user folder!");
})

// a POST request that will create a new user
router.post("/sign-up", async (req, res) => {
    //The nonfancy way
    // const notFancyBody = req.body;

    //The fancy way 
    const { username: UserInputUsername, email: UserInputEmail, password: UserInputPassword } = req.body;
    const userData = await User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail
    });

    res.json(userData);
});

module.exports = router;