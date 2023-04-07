const Todo = require("../models/todo");

module.exports.home= function(req, res)
{
    return res.render('index');
}

module.exports.addTask= function(req, res)
{
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    }).then((newTask) =>
    {
        console.log('task added ',newTask);
        return res.redirect('back');
    }).catch((err)=> 
    {
        console.log('error in creating task', err);
        return;
    });
}