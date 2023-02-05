const http = require("http");
const express = require("express");
const fs = require("fs");
var cors = require("cors");

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
      origin:["https://react-portfolio-bft6-psho6m2z4-abhijitutkarsh.vercel.app/Contact"], 
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
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
