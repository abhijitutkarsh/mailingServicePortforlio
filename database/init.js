const mongoose = require('mongoose');

module.exports = function()
{
    console.log(process.env)
    mongoose.connect('mongodb+srv://blog:workTIME123@cluster0.c0kvi1i.mongodb.net/Blogs?retryWrites=true&w=majority')
    // mongodb+srv://blog:workTIME123@cluster0.c0kvi1i.mongodb.net/test
    // mongodb+srv://blog:workTIME123@cluster0.nissr7f.mongodb.net/Blogs?retryWrites=true&w=majority
    .then(function(){
        console.log('connect')
    })
    .catch(function(){
        console.log('db connection error')
    })

}