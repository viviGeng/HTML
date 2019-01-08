function getList() {
    request("POST", 'http://localhost:3000/getlist', null, showList)
}

function showList(data) {
    for (var i = 0; i < data.length; i++) {
        document.write(`<input type="radio" value=${data[i]} name="linklist" id=${i}>${data[i]}</br>`)
    }
    var select_id;
    document.write(`<button onClick="onClick()">download</button>`)
    request("POST",'http://localhost:3000/download',data[select_id])
}
function onClick() {
    var linkList = document.getElementsByName('linklist')
    for(var i=0;i<linkList.length;i++){
        if(linkList[i].checked){
            select_id=i;
            break;
        }
    }
}

getList()


