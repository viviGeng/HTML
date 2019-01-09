var _data;
var select_id;
function getList() {
    request("POST", 'http://localhost:3000/getlist', null, showList)
}

function showList(data) {
    for (var i = 0; i < data.length; i++) {
        document.write(`<input type="radio" value=${data[i]} name="linklist" id=${i}>${data[i]}</br>`)
    }
    _data=data;
    document.write(`<button onClick="onClick()">download</button>`)
    
}
function onClick() {
    var linkList = document.getElementsByName('linklist')
    for(var i=0;i<linkList.length;i++){
        if(linkList[i].checked){
            select_id=i;
            break;
        }
    }
    console.log('send','http://localhost:3000/downfile?file='+_data[select_id])
    // request("GET",'http://localhost:3000/downfile?file='+_data[select_id],_data[select_id])
    request("GET",'http://localhost:3000/downfile2/'+_data[select_id],_data[select_id])
}

getList()


