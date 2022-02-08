const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        validate: [isEmail, "Please enter an valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter an password"],
        minlength: [6, "Minimum length of password is 6 characters"],
    },
});

userSchema.pre("save", async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;
