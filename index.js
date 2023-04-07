const express = require('express');
const port = 8000;
const app = express();

// database
const db = require('./config/mongoose');
// model
const Todo=require('./models/todo');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// setting body parser
app.use(express.urlencoded());
// setting static file
app.use(express.static('assets'));

//<------------------------Controller---------------------------->

app.get('/',function(req, res)
{
    return res.render('index');
});

// addting task
app.post('/add-task', function(req, res)
{
    Todo.create(
    {
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }).then((newTask)=> 
    {
        // console.log('task added in db');
        return res.redirect('back');
    }).catch((err)=> 
    {
        console.log("error in adding task in db ", err);
        return;
    });
});



app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running express server: ${err}`);
        return;
    }

    console.log(`express server is running in port: ${port}`);
});