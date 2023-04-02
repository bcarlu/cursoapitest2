require('dotenv').config();
let express = require('express');
let app = express();
let bodyParser = require('body-parser');


// Fist exercise
// app.get("/", function(req, res){
//     console.log("Hello Express");
//     res.send("Hello Express");
// })

// Third exercise
app.use("/public", express.static('public'));

// Sixth exercise
app.use(function(req, res, next){
    var message = req.method + " " + req.path + " - " + req.ip;
    console.log(message);
    next();
})

// Tenth exercise
app.use(bodyParser.urlencoded({extended: false}));

// Second exercise
app.get("/", function(req, res){
    var absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})

// Fourth exercise
// app.get("/json", function(req, res){
//     var obj = {"message": "Hello json"};
//     res.json(obj);
// })

// Fifth exercise
app.get("/json", function(req, res){
    var response = "Hello json";
    var obj = process.env.MESSAGE_STYLE === "uppercase" ? {"message": response.toUpperCase()} : {"message": response};
    res.json(obj)
})

// Seventh exercise
app.get("/now", function(req,res,next){
    req.time = new Date().toString();
    next();
}, function(req,res){
    res.send({time: req.time});
})

// Eighth exercise
app.get("/:word/echo", function(req,res){
    var word = req.params.word;
    res.json({echo: word})
})

// Ninth exercise
app.get("/name", function(req,res){
    var firstname = req.query.first;
    var lastname = req.query.last;
    res.json({name: firstname + " " + lastname})
});

// Eleventh exercise
app.post("/name", function(req,res){
    var firstname = req.body.first;
    var lastname = req.body.last;
    res.json({name: firstname + " " + lastname})
});


































 module.exports = app;
