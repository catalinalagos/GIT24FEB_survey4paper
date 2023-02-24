const express = require('express');
const port = process.env.PORT || 3000  //port number


const app = express(); // this is the app or instance of express
var fs = require('fs');

//API Middleware
app.use(express.json()); //accept data in json
app.use(express.urlencoded({extended: true})); //decode the data sent through
app.use(express.static('public')); //serve public folder as static folder
//API ROUTES
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.post('/formPost',(req,res)=>{
    var contentsub=JSON.stringify(req.body.content);
    res.sendFile(__dirname+'/public/thanks.html')
    fs.appendFile('answers.txt', `\n ${contentsub}`, function (err) {
        if (err) throw err;
        console.log('Updated!');
      });

});

//Listen on pott
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});