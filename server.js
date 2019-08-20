// REQUIREMENTS

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// END REQUIREMENTS
// MIDDLEWARE

// Allows bodyparser to user entire crud operations on url encoded data sent to it
app.use(bodyParser.urlencoded({extended:false}));
// allows bodyparser to handle json
app.use(bodyParser.json());

// Custom Logger Middleware
app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;
    const requestedAt = new Date().toLocaleString();
    console.table({url, method, requestedAt})
    next();
})

// User Session
app.use(session({
    secret: '3c6a4e37d421070114c8fbb63c2ae546fdb41346ec457e08203af8988345915d',
    resave: false,
    saveUninitialized: false // save only if session property added
}))

// CORS
const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// END MIDDLEWARE