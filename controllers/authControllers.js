const User = require("../models/User");

const handleError = (err) => {
    let errors = {email: "", password: ""};

    if (err.message.includes("user validation failed")){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }

    if (err.code === 11000){
        errors.email = "email is already registered";
        return errors;
    }

    return errors;
}

module.exports.signup_get = (req, res) => {
    res.status(200).json({
        "route": "signup",
    });
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        const errors = handleError(err);
        res.status(400).json(errors);
    }
}

module.exports.login_get = (req, res) => {
    res.status(200).json({
        "route": "signup",
    });
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.create({ email, password })
    } catch (err) {
        
    }

    res.status(200).json({
        "route": "signup",
    });
}