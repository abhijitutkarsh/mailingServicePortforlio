const Blogs = require("../database/modals/Blogs")

module.exports = async function()
{
    // var limit = 5;
  
    // get records to skip
    // var startFrom = parseInt(i);
    // return new Promise(async function(resolve, reject)
    // {
        // console.log(i);
       return await Blogs.find({})
    //    .limit(5)
       
  
}