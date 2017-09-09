var express = require('express');


var app = express();
app.use(express.static('public'));



var port = process.env.PORT || 8080;



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/report', (req, res) => {
  res.sendFile(__dirname + '/report.html');
});

app.get('/search', (req, res) => {
  res.sendFile(__dirname + '/search.html');
});

app.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/upload.html');
});

app.get('/search_result', (req, res) => {
  res.sendFile(__dirname + '/search_result.html');
});

app.get('/upload_result', (req, res) => {
  res.sendFile(__dirname + '/upload_result.html');
});

app.listen(port, () => {
  console.log('Listening on port 8080!')
})


// var express = require('express');
// var firebase = require('firebase');
// var fs = require('fs');
// var bodyParser = require('body-parser');

// var app = express();
// app.use(express.static('files'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// var port = process.env.PORT || 8080;
// var reports = [];

// firebase.initializeApp({
//   apiKey: "AIzaSyCrooB7pc-GBZuHh8Og-OZUSrlMBUl_WUw",
//   authDomain: "cs2340-ios-1499489229862.firebaseapp.com",
//   databaseURL: "https://cs2340-ios-1499489229862.firebaseio.com",
//   projectId: "cs2340-ios-1499489229862",
//   storageBucket: "cs2340-ios-1499489229862.appspot.com",
//   messagingSenderId: "1067220737955"
// });

// firebase.database().ref('/reports').on('value', (snapshot) => {
//   reports = snapshot.val();
//   // Reads data in reverse order.
//   reports.reverse();
//   var content = JSON.stringify(reports);
//   fs.writeFile('files/reports.json', content, 'utf8', (err) => {
//     if (err) throw err;
//     console.log("New data written to file!")
//   });
// });

// app.get('/', (req, res) => {
//   res.render('pages/index');
// });

// app.get('/reports', (req, res) => {
//   res.render('pages/reports', {
//     reports: reports
//   });
// });

// app.get('/files/reports.json', (req, res) => {
//   res.sendFile(__dirname + '/files/reports.json');
// });

// app.post('/reports', (req, res) => {
//   var data = req.body;
//   data.latitude = parseFloat(data.latitude);
//   data.longitude = parseFloat(data.longitude);
//   if (isNaN(data.latitude) || isNaN(data.longitude)) {
//     res.send('Invalid Input');
//   }
//   firebase.database().ref('reports/' + reports.length).set(data);
//   res.render('pages/reports', {
//     reports: reports
//   });
// })


// app.listen(port, () => {
//   console.log('Listening on port 8080!')
// })
