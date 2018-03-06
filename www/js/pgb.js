function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function showNetworkInfo() {
	var wifi = cordova.plugins.wifiinfo;
	info = wifi.getHostname(function success(hostname)

navigator.notification.alert(info);
}

