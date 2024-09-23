function base64Encode(str) {
    return btoa(str);
}

var vpnCheckUrl = base64Encode("https://abadaoucht.com/vpn.php");
var imageUrl = base64Encode("https://i.imgur.com/RclhiHY.png");

var VPN = false;

$.getJSON(atob(vpnCheckUrl), function(data) {
    VPN = data.proxy ? true : false;

    if (VPN) {
        var vpnWarning = document.createElement("div");
        vpnWarning.style.position = "fixed";
        vpnWarning.style.top = "50%";
        vpnWarning.style.left = "50%";
        vpnWarning.style.transform = "translate(-50%, -50%)";
        vpnWarning.style.backgroundColor = "#fff";  
        vpnWarning.style.width = "100%";
        vpnWarning.style.height = "100%";  
        vpnWarning.style.padding = "20px";
        vpnWarning.style.textAlign = "center";
        vpnWarning.style.borderRadius = "10px";
        vpnWarning.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";  
        vpnWarning.style.zIndex = "9999";  

        var img = document.createElement("img");
        img.src = atob(imageUrl); 
        img.alt = "VPN Detected";
        img.style.maxWidth = "20%";
        img.style.height = "auto";
        img.style.marginBottom = "20px";  

        var title = document.createElement("div");
        title.innerHTML = "VPN Detected";
        title.style.fontSize = "24px";
        title.style.fontWeight = "bold";
        title.style.marginBottom = "10px";
        title.style.color = "#000";  

        var message = document.createElement("div");
        message.innerHTML = "We’ve detected that you are using a VPN. Please close your VPN and refresh the page to continue.";
        message.style.color = "#000";  
        message.style.fontSize = "18px";
        message.style.marginTop = "10px";

        vpnWarning.appendChild(img);
        vpnWarning.appendChild(title);
        vpnWarning.appendChild(message);

        document.body.appendChild(vpnWarning);
    }
}).fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Error:", textStatus, errorThrown);  
});
