const express = require("express");
const users = require("./users");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

// db.authenticate()
//     .then(() => console.log("Connected"))
//     .catch((err) => console.log(err));

const { Employee } = require("./db");

app.get("/", (req, res) =>
    res.send("Welcome to Node.js + MySQL boilerplate API.")
);

app.get("/employees", (req, res) => {
    Employee.findAll().then((employee) => {
        res.send(employee);
    });
});

app.post("/saveEmployee", async (req, res) => {
    const payload = req.body;
    const newEmp = await Employee.create({
        'FirstName': payload['fname'],
        'LastName': payload['lname'],
        'DOB': payload['dob'],
        'Hours': payload['hours'],
        'EmpCategory': payload['empCategory'],
        'Address': payload['address']
    });
    console.log("added new employee:\n",newEmp.toJSON());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});