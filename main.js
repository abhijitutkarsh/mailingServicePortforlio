const http = require("http");
const express = require("express");
const fs = require("fs");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const session = require("express-session");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());
 //only json data
 app.use( express.urlencoded({extended: true}))
 app.use(
    cors({
      // origin: ["https://ecommerce370001.herokuapp.com"],
      origin:'*', 
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200,
    })
  );
  
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});
app.enable('trust proxy');

 //for form data
//  app.use(session({
//    secret: 'keyboard cat',
//    resave: false,
//    saveUninitialized: true,
//    cookie: { secure: false } //doubt
//  }))
const SendMailControllers = require("./controllers/SendMailControllers");


app.get("/",(req, res)=>{
    res.end("hello")
});


app.post('/sendMail', SendMailControllers)

app.listen(port, "0.0.0.0", () => {
  console.log(`server started on http://localhost:3002`);
});
