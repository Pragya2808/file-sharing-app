const jwt = require('jsonwebtoken');

class AuthController {
    show = function (req, res) {
        res.render('login'); // login.hbs
    }

    logout = function (req, res) {
        // TODO: handle logout.
    }

    login = function (req, res) {
        // TODO: handle login.
        const user = {
            username: req.body.username,
            password: req.body.password,
        }

        var token = jwt.sign(
            { foo: 'bar' },
            'harryguci',
            { expiresIn: '1h' }
        );

        // console.log("Token", token);
        res.send({ accessToken: token });
    }

    signup = function (req, res) {
        // TODO: handle signup.
        const user = {
            username: req.body.username,
            password: req.body.password,
        }
        console.log(user);
        res.send(user);
    }
};

module.exports = new AuthController();