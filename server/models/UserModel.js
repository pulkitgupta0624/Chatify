const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "provide name here"]
    },
    email: {
        type: String,
        required: [true, "provide email here"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "enter password here"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
},{
    timestamps: true
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;