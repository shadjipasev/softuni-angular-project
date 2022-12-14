const { Schema, Types, model} = require("mongoose");


const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    hashedPassword: {type: Number, required: true},
    //Basket, Subscription for unavailable item..
});

userSchema.index({ email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;
