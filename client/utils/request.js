function get(method,params) {
  if(params==undefined){
    console.log('url',getUrl(`${method}`))
    return request("GET", getUrl(`${method}`))
  }
  console.log('url',getUrl(`${method}?data=${params}`))
  return request("GET", getUrl(`${method}?data=${params}`))
}

function post(method) {
  return request("POST", `http://localhost:3000/${method}`)
}

var xmlhttp
function request(type, url) {
  return new Promise((resolve, reject) => {
    loadXMLDoc(type, url, resolve,reject)
  })
  
}

function loadXMLDoc(type, url, resolve,reject) {
  xmlhttp = null
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else if (window.ActiveXobject) {
    xmlhttp = new ActiveXOBject("Microsoft.XMLHTTP")
  }
  if (xmlhttp != null) {
    try{
      xmlhttp.open(type, url, true)
      if(type=="POST"){
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }else {
        xmlhttp.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8")
        //xmlhttp.setRequestHeader("Accept-Encoding", "gzip, deflate, br")
        //xmlhttp.setRequestHeader("Connection", "keep-alive")
    }
  
      xmlhttp.onreadystatechange = state_Change(resolve,reject)
    
      xmlhttp.send(null)
      console.log('after send')
    }catch(err){
      console.log("xml catch error: ",err)
    }
    
    
  } else {
    alert("Your browser does not support XMLHTTP.")
  }
}

function state_Change(resolve,reject) {
  return function() {
    console.log('enter state change')
    console.log(xmlhttp.readyState, xmlhttp.status)

    if (xmlhttp.readyState == 4) {
      // 4 = "loaded"
      if (xmlhttp.status == 200) {
        // 200 = "OK"
        console.log("get response")
        //resolve(JSON.parse(xmlhttp.response))
        if(xmlhttp.response == undefined){
          reject(JSON.parse(xmlhttp.response))
        }
        else{
          resolve(JSON.parse(xmlhttp.response))
        }
        // reject(JSON.parse(xmlhttp.response))
      } else {
        reject("Problem retrieving XML data:" + xmlhttp.statusText)
        //alert("Problem retrieving XML data:" + xmlhttp.statusText)
      }
    }
  }
}


