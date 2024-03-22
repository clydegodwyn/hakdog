const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const port = 3000;
const url = "mongodb://localhost:27017/admin";



mongoose.connect(url, {})
.then(() => {
    console.log('Database connected');
})
.catch(() => {
console.log('Error connecting to database', err);
});

const CovidTracker = require('./Route/Covidtracker.route');
app.use('/tracker', CovidTracker);

const Vaccinator = require('./Route/Vaccinator.route');
app.use('/vaccinator', Vaccinator);

//mali endpoint
app.use((req, res, next) =>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) =>{
    res.status(err.status || 500);
    res.send({
       error: {
        status: err.status || 500,
        message: err.message
       } 
    });
});

app.listen(port, () =>{
    console.log('Listening on port 3000');

});
