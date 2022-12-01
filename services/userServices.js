const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt  = require("jsonwebtoken");

const secret = 'zmhmfnios563dqa53d156'

async function register(email, password) {
    const existing = awaitUser.findOne({ email }).collation({ locale: en, strength: 2 });

    if (existing) {
        throw new Error('This email already taken');
    }

    const hashedPassword = bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        hashedPassword,
    })

    createToken(user);

}

async function login(email, password) {

}

async function logout() { }


function createToken(user){
   const payload = {
    _id: user._id,
    email,
   }

   return jwt.sign(payload, secret)
}