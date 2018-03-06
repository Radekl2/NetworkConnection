function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function showNetworkInfo() {
	var wifi = cordova.plugins.wifiinfo;
	wifi.getHostname(function success(hostname){
    console.log(hostname); // ipad-of-user.local.
});
	
	//info =  'Hi, I am your smartphone :-)';

navigator.notification.alert(hostname);
}

