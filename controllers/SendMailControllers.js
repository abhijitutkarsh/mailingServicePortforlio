const sendMailService = require("../services/sendMailService.js");


module.exports = async function(req, res)
{

	const data = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
        // isVerified: 
	}		

    try{
       await sendMailService(data,req,res);
      
    //    console.log("done")
        // res.json("");
    }
    catch(err)
    {
            console.log(err)
            // res.end("Failed")
    }

}