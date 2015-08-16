var myApp = new Framework7({});

var $$ = Dom7;

// Select Template
var template = $$('#random-template').html();

// Compile and render
var compiledTemplate = Template7.compile(template);

// Defined as function "getrandom"
function getrandom() {
  // Get JSON Data from UrbanDictionary API 
  $$.getJSON('http://api.urbandictionary.com/v0/random', function (json) {

    // Insert rendered template
    $$('#content-wrap').html(compiledTemplate(json))
  });
};

// Execute to list UrbanDictionary Definitions
getrandom();

// Select Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');

// On refresh
ptrContent.on('refresh', function (e) {
  // Emulate 1s loading
  setTimeout(function () {

    // Execute getrandom to get new Definitions
    getrandom();

    myApp.pullToRefreshDone();
  }, 1000);
});


var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});