var _data
var select_id
function getList() {
  request("POST", "http://localhost:3000/getlist", null, showList)
}

function showList(data) {
  new Date().getTime() / 1000
  for (var i = 0; i < data.length; i++) {
    document.write(
      `<input class="data-item" type="radio" value=${
        data[i]
      } name="linklist" id=${i}>${data[i]}</br>`
    )
  }
  _data = data
  document.write(`<button>download</button>`)
  $("button").click(function() {
    var linkList = $(".data-item")
    for (var i = 0; i < linkList.length; i++) {
      if (linkList[i].checked) {
        select_id = i
        break
      }
    }
    $.get("http://localhost:3000/downfile2/" + _data[select_id])
  })
}

getList()

get("getStudentNames").then(function(res) {
  console.log("getName_res",res.data[0].name);
  get("getStudentIdByName",res.data[0].name).then(
      function(res){
            console.log("getId_res",res.data.id);
            get("getStudentGenderById",res.data.id).then(
                function(res){
                    console.log("getGender_res",res.data.gender);
                }
            )
      }
  );

})

