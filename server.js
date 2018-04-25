var express = require('express');
var app = express();
var http = require('http').Server(app);
var logger = require('js-logging').console();


const PORT = 3310;

http.listen(process.env.PORT || PORT, function(){
	logger.info("Server listening on port : " + PORT);
});

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});
app.get("/body-content", function(req, res) {
	res.sendFile(__dirname + "/body-content.html");
})
app.get('/login', function(req, res){
	res.sendFile(__dirname + "/index.html");
})
app.get('/signup', function(req, res){
	res.sendFile(__dirname + "/signup.html");
})
app.get('/user/home', function(req, res){
	res.sendFile(__dirname + "/user-home.html");
})




app.use('/js', express.static(__dirname + "/js"));
app.use('/css', express.static(__dirname + '/css'));
app.use('/assets', express.static(__dirname + '/assets'));





