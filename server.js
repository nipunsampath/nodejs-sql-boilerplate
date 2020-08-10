const express = require("express");
const db = require("./db");
const users = require("./users");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// db.authenticate()
//     .then(() => console.log("Connected"))
//     .catch((err) => console.log(err));

const { User } = require("./db");

app.get("/", (req, res) =>
    res.send("Welcome to Node.js + MySQL boilerplate API.")
);

app.get("/users", (req, res) => {
    User.findAll().then((users) => {
        res.send(users);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});