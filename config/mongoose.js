const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todoList_db');

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to database'));

db.once('open', function(){
    console.log('Connected to database');
});