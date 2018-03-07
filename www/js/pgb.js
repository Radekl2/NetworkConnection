function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function showNetworkInfo() {
	info = WifiWizard.isWifiEnabled(win, fail);

navigator.notification.alert(info);
}

