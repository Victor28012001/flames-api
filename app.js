const express = require('express');
require('dotenv').config();
const axios = require('axios');
const connectDB = require('./config/db');
const members = require("./routes/api/members");
const contacted = require("./routes/api/contacted");
const pastservices = require("./routes/api/pastservices");
const services = require("./routes/api/services");
const programs = require("./routes/api/programs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));


// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use("/api/members", members);
app.use("/api/contacted", contacted);
app.use("/api/pastservices", pastservices);
app.use("/api/services", services);
app.use("/api/programs", programs);


// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;


const fetchData = async () => {
    const url = process.env.API_URL;
    const apiKey = process.env.API_KEY;

    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        console.log(response.data);
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
};


app.get('/', (req, res) => {
    fetchData()
    res.send('Hello World!')
})
app.listen(port, () => console.log(`Server running on port ${port}`));