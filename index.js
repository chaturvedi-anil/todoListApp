const express = require('express');
const port = 8000;
const app = express();

app.use('/', require('./routes'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running express server: ${err}`);
        return;
    }

    console.log(`express server is running in port: ${port}`);
});