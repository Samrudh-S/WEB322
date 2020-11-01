var PORT = process.env.PORT || 8080; 
const express = require('express');
const app = express();
const {dirname} = require("path");
var path = require("path"); 
var nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/src")); 

app.use(bodyParser.urlencoded({ extended: true }));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: 
    {
        user: '',
        pass: ''
    }
});

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/listing", function(req,res)
{
    res.sendFile(path.join(__dirname, "/views/listing.html"));
});
app.get("/register", function(req,res)
{
    res.sendFile(path.join(__dirname, "/views/register.html"));
});
app.get("/dashboard", function(req,res)
{           
    res.sendFile(path.join(__dirname, "/views/dashboard.html"));
});

app.post("/dashboard", function(req,res)
{    
    const FORM_DATA = req.body;

    var mailOptions = 
    {
        from: '',
        to: FORM_DATA.Email,
        subject: 'Globalb&b Registration',
        html: '<p>Hello ' + FORM_DATA.LName + "</p><p>Thank you for your registration.</p>"
    }

    transporter.sendMail(mailOptions, (error, info) => 
    {
        if (error) {
            console.log("ERROR: " + error);
        } else {
            console.log("SUCCESS: " + info.response);
        }       
    });
});

app.listen(PORT,function()
{
    console.log(`Listening on port ${PORT}`);
});

