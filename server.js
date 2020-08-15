const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

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
    try {
        const newEmp = await Employee.create({
            'FirstName': payload['fname'],
            'LastName': payload['lname'],
            'DOB': payload['dob'],
            'EmpType': payload['empType'],
            'Address': payload['address']
        });
        JSON_employee = newEmp.toJSON();
        console.log("added new employee:\n", JSON_employee);
        res.send(200).json(JSON_employee);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});