const { verify } = require('jsonwebtoken');

function Verify(req, res, next) {
    try {
        var token = req.headers.accesstoken;
        console.log(req.headers);
        if (!token) {
            res.send({
                error: "Invalid token"
            })
        }

        var validToken = verify(token, 'harryguci');
        if (validToken) return next();
    } catch (err) {
        res.send({ error: err });
    }
}


module.exports = {
    verify: Verify
}   