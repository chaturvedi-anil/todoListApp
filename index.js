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
app.use(express.static('./assets'));

//<------------------------Controller---------------------------->

app.get('/',function(req, res)
{
    Todo.find({})
    .then((tasks)=>
    {
        return res.render('index',{
            task_list: tasks
        });
    })
    .catch((err) =>
    {
        console.log(`error in fetching task from db : ${err}`);
        return;
    });
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

app.get('/delete-task/', function(req, res)
{   
    // geting id 
    let id=req.query.id;
    console.log('inside delete : ',id);
    

    Todo.findByIdAndDelete({_id:id})
    .then(() =>
    {
        console.log('Task deleted');
        return res.redirect('back');
    })
    .catch((err) =>
    {
        console.log('error in deleting contact', err);
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