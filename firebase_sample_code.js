// Assuming libraries are imported and necessary configurations are done.

// Gets a reference to the database
var ref = firebase.database().ref();

// Gets a reference to the storage
var storageRef = firebase.storage().ref();

function databaseAPI() {

	// Fetches the value from path 'path/to'
	ref.child('path/to').once("value")
	.then(function(snapshot) {
		var data = snapshot.val()
	    // Do stuff with @code{data} here.
	})

	// Posts the new value 'newVal' to path 'path/to'
	ref.child('path/to').set('newVal');  

}

function storageAPI() {

	var selectedFile = document.getElementById('input').files[0];

	// Uploads @code{selectedFile} as 'filename' to path 'path/to' .
	storageRef.child('path/to/filename').put(selectedFile)

	// Gets a download url to 'filename' at path 'path/to'
	storageRef.child('path/to/filename').getDownloadURL()
	.then(function(url) {
		// Do stuff with @code{url} here.
  })
}
