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
app.get("/json", function(req, res){
    var obj = {"message": "Hello json"};
    res.json(obj);
})






































 module.exports = app;
