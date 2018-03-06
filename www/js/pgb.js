function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function showNetworkInfo() {
	var wifi = cordova.plugins.wifiinfo;
	wifi.getHostname(function success(info){
    console.log(info); //
    /*
    {
        hostname: 'ipad-of-user.local',
 
        // ConnectionInfo
        connection: {
            bssid (string)
            hidden (boolean): Whether the network is hidden or not
            ip (string)
            speed (int): Uplink speed
            mac (string)
            rssi (int)
            ssid (string)
            frequency (int): WiFi band, Lollipop (API 26+) only
        },
 
        // DhcpInfo
        dhcp: {
            dns1 (string)
            dns2 (string)
            gateway (string)
            ip (string)
            lease (int): Lifespan of DHCP lease
            netmask (string)
            server (string)
        },
 
        // list of IPv4 and IPv6 interfaces
        interfaces: {
            wlan0: {
                ipv4Addresses[],
                ipv6Addresses[]
            }
        }
    }
    */
});

navigator.notification.alert(JSON.stringify(info));
}

