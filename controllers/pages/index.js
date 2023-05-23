const router = require('express').Router();
const { User } = require("../../models");
// localhost:3001
router.get('/', async (req, res) => {
    const userData = await User.findAll({
        attributes: [
            'id',
            'username'
        ]
    });
    console.log("this is ugly x2", userData);

    const prettyUserData= userData.map((user) => user.get({ plain: true }));
    console.log("pretty user data yay", prettyUserData);
    res.render('homepage', {prettyUserData});
})

//localhost:3001/dashboard
router.get('/dashboard/:user_id', async (req, res) => {
    const userData = await User.findByPk(req.params.user_id, {
        attributes: [
            'username',
            'email'
        ]
    });
    console.log("this is ugly", userData);

    const actualUserData = userData.get({ plain: true });
    console.log("this is handsome", actualUserData);
    res.render('dashboard', actualUserData);
});

module.exports = router;