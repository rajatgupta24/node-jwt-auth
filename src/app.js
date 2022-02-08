const express = require("express");
const app = express();

const auth = require("../routes/auth");

const PORT = 5000;

app.use(express.json());

app.use("/auth", auth);

app.get("/", (req, res) => {
    res.json({
        "message": "Hi there!!!"
    });
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));