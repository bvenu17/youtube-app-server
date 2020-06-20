const express = require('express');
const app = express();
const configRoutes = require('./routes/');


const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var PORT = process.env.PORT || 5000;

// app.use(function (req, res, next) {
//     console.log('Request body:', req.body);
//     console.log('Request url:', req.originalUrl);
//     console.log("Http verb:",req.method);
//     next()
//   });

// const pathsAccessed = {};
// app.use(function(request, response, next) {
//   if (!pathsAccessed[request.path]) pathsAccessed[request.path] = 0;
//   pathsAccessed[request.path]++;
//   console.log('There have now been ' + pathsAccessed[request.path] + ' requests made to ' + request.path);
//   next();
// });

configRoutes(app);


app.listen(PORT, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:"+ PORT); 
});