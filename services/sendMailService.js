// const MailModel = require("../../database/models/mail")
const { response } = require("express");
const { getMaxListeners } = require("process")
const mail = require("../utils/sendMail") 

module.exports =async function(data, req, res)
{
//    const updateddata =  await dataModel.create(data);
const name= data.name;
            const message =  data.message;
const from =  data.email;
try{

    const result = await mail.sendMail([
        {
            Email: "abhijitu17@gmail.com",
            
        }], 
        "Verify your account",
        `<!DOCTYPE html>
        <html>
        <head> <title></title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <style type="text/css"> @media screen { @font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; src: local('Montserrat'), local('Montserrat'), url(https://fonts.google.com/share?selection.family=Montserrat:ital,wght@1,200); } @font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 700; src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.google.com/share?selection.family=Montserrat%20Subrayada:wght@700%7CMontserrat:ital,wght@1,200); } /* CLIENT-SPECIFIC STYLES */ body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { -ms-interpolation-mode: bicubic; } /* RESET STYLES */ img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; } table { border-collapse: collapse !important; } body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; } /* iOS BLUE LINKS */ a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } /* MOBILE STYLES */ @media screen and (max-width:600px) { h1 { font-size: 32px !important; line-height: 32px !important; } } /* ANDROID CENTER FIX */ div[style*="margin: 16px 0;"] { margin: 0 !important; } </style>
</head>
<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
  Name = ${name} <br>
  Email = ${from} <br>
  Message = ${message} <br>
</body>
</html>
`) .then((result) => {
    console.log(result.body)
    res.end("Success")
})
.catch((err) => {
    console.log(err.statusCode)
    res.end("failed")
})
// .response("Success")
// console.log("Success")

}
catch(error){
    console.error(error)
}
// console.log(result)
return;

}