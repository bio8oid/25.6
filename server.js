var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('assets'));

app.use('/dynamic-lama', function(req, res, next){
    console.log('Be aware that Lama watching YOU!');
    next();
});

app.get('/dynamic-lama', function(req, res){

    res.render('lama', {
        title: "LAMA",
        url: 'la.jpg'
    });
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Lama watching at http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('No Lama!')
});
