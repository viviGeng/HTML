var _callback;
function request(type, url, params, callback) {
    var xmlhttp;
    _callback=callback;
    if(params != null){
        params="data="+params;
    }
    loadXMLDoc(url);
}

function loadXMLDoc(url) {
    xmlhttp = null;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXobject) {
        xmlhttp = new ActiveXOBject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.open("POST", url, true);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlhttp.onreadystatechange = state_Change;
        console.log("after post")
        xmlhttp.send(params);
        console.log("after send")
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