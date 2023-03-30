require('dotenv').config();
let express = require('express');
let app = express();


// Fist exercise
// app.get("/", function(req, res){
//     console.log("Hello Express");
//     res.send("Hello Express");
// })

// Third exercise
app.use("/public", express.static('public'));

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
    // var obj = process.env.MESSAGE_STYLE == "uppercase" ? {"message": "HELLO JSON"} : {"message": "Hello json"};
    // res.json(obj);
    var response = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        response = "HELLO JSON";
    } else {
        response = "Hello json";
    }
    // res.json({"message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json"})
    res.json({"message": response})
})





































 module.exports = app;
