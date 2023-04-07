const express = require('express');
const port = 8000;
const app = express();

// database
const db = require('./config/mongoose');
// model
const Todo=require('./models/todo');

app.use('/', require('./routes'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// setting body parser
app.use(express.urlencoded());
// setting static file
app.use(express.static('assets'));

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running express server: ${err}`);
        return;
    }

    console.log(`express server is running in port: ${port}`);
});