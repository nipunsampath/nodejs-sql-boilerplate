const express = require("express");
const db = require("./db");
const employees = require("./employees");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.json())

// db.authenticate()
//     .then(() => console.log("Connected"))
//     .catch((err) => console.log(err));

const { Employee } = require("./db");

app.get("/", (req, res) =>
    res.send("Welcome to Node.js + MySQL boilerplate API.")
);

app.get("/employees", (req, res) => {
    Employee.findAll().then((employees) => {
        res.send(employees);
    });
});

app.post("/saveEmployees", (req, res) => {
    const data = req.body;
    const employee = Employee.create({
        FirstName: data['fname'],
        LastName: data['lname'],
        DOB: data['dob'],
        Hours: data['hours'],
        Address: data['address'],
        EmpCategory: data['empCategory'],
    })
    res.sendStatus(200);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});