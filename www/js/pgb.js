function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
   
}

function onDeviceReady() {
	 showNetworkInfo();
}

function showNetworkInfo() {
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE){
         alert('No Internet');      
    }else{
         alert('Internet Connection there');
    }
}

