var myApp = new Framework7({
    modalTitle: 'UrbanDic API Test',
    modalPreloaderTitle: 'Loading',
    modalButtonCancel: 'Cancel',
    pushState: false,
    onAjaxStart: function (xhr) { myApp.showPreloader();},
    onAjaxComplete: function (xhr) { myApp.hidePreloader();},
    sortable: false,
    swipeout: false,
	cacheDuration: 1000*60*3,
});

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var modalInfo = localStorage.modalInfo;
if (!modalInfo) {
    myApp.modal({
    title: 'Welcome,',
    text: 'this is just an example to test out Template7 and the UrbanDictionary API',
    buttons: [
      {text: 'Okay'}] 
    });localStorage.modalInfo = 'true'
};