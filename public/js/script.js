var ref = firebase.database().ref();
var storageRef = firebase.storage().ref();

// ref.once("value")
// .then(function(snapshot) {
//   // var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
//   // var firstName = snapshot.child("name/first").val(); // "Ada"
//   // var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
//   // // var age = snapshot.child("age").val(); // null
//   console.log(snapshot.val())
// });

function add() {

  ref.child('routes/route-7').set('Ha');
  ref.child('routes/route-7').once("value")
  .then(function(snapshot) {
    console.log(snapshot.val())
  })

  var selectedFile = document.getElementById('input').files[0];
  storageRef.child(selectedFile.name).put(selectedFile)
}

function show() {
  storageRef.child('test2.jpg').getDownloadURL().then(function(url) {
      var img = document.getElementById('pic');
      img.src = url;
  })
}
