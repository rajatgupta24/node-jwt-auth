const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.post("/signup", [
    check("email").isEmail(),
    check("password").isLength({ min: 8 }).contains(/\d/)
], (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array(),
        });        
    }

    res.json({
        "message": "Get auth done",
        "email": email,
        "password": password,
    });
});

module.exports =  router;