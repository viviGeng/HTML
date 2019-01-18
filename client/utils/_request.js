var _callback;
var xmlhttp;
console.log("request ====>")
function request(type, url, params, callback) {
    _callback = callback;
    loadXMLDoc(type, url);
}

function loadXMLDoc(type, url) {
    xmlhttp = null;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXobject) {
        xmlhttp = new ActiveXOBject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.open(type, url, true);
        console.log('type,url',type,url);
        if(type=="POST"){
            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }else {
            xmlhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
            xmlhttp.setRequestHeader("Accept-Encoding", "gzip, deflate, br")
            xmlhttp.setRequestHeader("Connection", "keep-alive")
        }
        
        xmlhttp.onreadystatechange = state_Change;
        console.log("after post")
        xmlhttp.send(null);
    }
    else {
        alert("Your browser does not support XMLHTTP.");
    }
}
function state_Change() {
    console.log("on state_Change", xmlhttp.readyState)
    if (xmlhttp.readyState == 4) {// 4 = "loaded"
        console.log("readyState 4")
        if (xmlhttp.status == 200) {// 200 = "OK"
            console.log("status 200", xmlhttp.response, xmlhttp.responseText);
            _callback && _callback(JSON.parse(xmlhttp.response))
        }
        else {
            alert("Problem retrieving XML data:" + xmlhttp.statusText);
        }
    }
}