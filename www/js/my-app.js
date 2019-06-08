// Initialize app
var $$ = Dom7;
var myApp = new Framework7({
  root: '#app',
language: 'es-ES',
name: 'qr-scanner',
theme: 'ios',
id: 'fitness.capitan.qr-scanner'
});


var constraints = navigator.mediaDevices.getSupportedConstraints();
console.log(constraints);
navigator.mediaDevices.getUserMedia({
    'video': {
        facingMode: 'user'
    }
}).then(function(mediaStream) {
  // do something with the media stream
  var mediaControl = document.querySelector('video');
  mediaControl.srcObject = mediaStream;
  mediaControl.src = URL.createObjectURL(mediaStream)
  console.log("funciona");
});

// Add view
// var mainView = myApp.addView('.view-main', {
//     // Because we want to use dynamic navbar, we need to enable it for this view:
//     dynamicNavbar: true
// });

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})
