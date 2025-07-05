// API Core Modules and Packages:
const express = require("express");
const dotenv = require('dotenv').config();


// Common ENVs:
const PORT = process.env.PORT || 5000;

// Common App Configurations:
const app = express();

app.get('/', (req, res) => {
    res.send('Hello!')
})

// Event Listener:
app.listen(PORT, () => {
    try {
        console.log(`App is Listening on Port : ${PORT}`);
    } catch (error) {
        throw new error('Something when wrong!');
    }
})