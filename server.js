// * Server Requirements
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// dotenv config
dotenv.config({ path: './config.env'});

// * Express App
const app = express();

// Dev logging - runs only in dev mode
if(process.env.NODE_ENV === 'development') {
    // use morgan in dev 'mode'
    app.use(morgan('dev'));
}

// * Routes
app.use('/api/v1/profile', require('./routes/profile'));






// dotenv variables
// if PORT is found, use it, otherwise 8000
const PORT = process.env.PORT || 8000;
  
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`); 
})

