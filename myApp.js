let express = require('express');
let app = express();


// Fist exercise
// app.get("/", function(req, res){
//     console.log("Hello Express");
//     res.send("Hello Express");
// })

app.use("/public", express.static('public'));


// Second exercise
app.get("/", function(req, res){
    var absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})






































 module.exports = app;
