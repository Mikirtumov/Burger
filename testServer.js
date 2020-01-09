const express= require('express');

const app = express();


const PORT = 9001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
   extended: false 
}))

// Custom middleware increases the value of the num (adds to)
app.use(function(req, res, next) {
    req.body.num = parseInt(req.body.num) + 1;
    next();
})


app.post('/test', function(req, res) {
    res.json({
        message: "hi",
        num: req.body.num
    })
})

app.post('/anotherTest', function(req, res) {
    res.json({
        num: req.body.num
    })
})




app.listen(PORT, function() {
     console.log(`Listening on port ${PORT}`);
});


