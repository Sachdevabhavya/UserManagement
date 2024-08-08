const jwt = require("jsonwebtoken")
const {secret} = require("../config/jwtConfig")
const app = require("express")
const cookieParser = require('cookie-parser');
var cookie = require('cookie');


app.use(cookieParser)

const auth_middleware = async(req,res) => {
    var token = cookie.parse(req.headers.cookie || '');

    if(!token) {
        return res.status(404).json({message : "Access denied , no token provided"})
    }

    try {
        const decoded = jwt.verify(token , secret)
        req.user = decoded

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    auth_middleware
}