const express = require('express');
const port = 8000;
const app = express();

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running express server: ${err}`);
        return;
    }

    console.log(`express server is running in port: ${port}`);
});