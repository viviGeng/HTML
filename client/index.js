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
  console.log("getName_res", res.data[0].name)
  get("getStudentIdByName", res.data[0].name).then(function(res) {
    console.log("getId_res", res.data.id)
    get("getStudentGenderById", res.data.id).then(function(res) {
      console.log("getGender_res", res.data.gender)
    })
  })
})

function* get_student() {
  const res = yield get("getStudentNames")
  console.log("res", res)
  const res2 = yield get("getStudentIdByName", res.data[0].name)
  console.log("res2", res2)
  const res3 = yield get("getStudentGenderById", res2.data.id)
  console.log(res3.data)
  return { test: res3.data.gender + "222" }
}

/* var generator=get_student();
var generatorResult=generator.next();
generatorResult.value.then(res => {
    generatorResult=generator.next(res)
    generatorResult.value.then(res => {
        generatorResult=generator.next(res)
        generatorResult.value.then(res=>{
            generator.next(res)
        })
    })
}) */

function next(generator, lastResponse, resolve) {
  var generatorResult = generator.next(lastResponse)
  if (generatorResult.done) {
    //console.log('gresult',generatorResult, lastResponse)
    resolve(generatorResult.value)
    return generatorResult.value
  }
  // console.log('gresult',generatorResult,lastResponse)
  generatorResult.value.then(res => {
    next(generator, res, resolve)
  })
}

function generator_run(generator) {
  return new Promise((resolve, reject) => {
    next(generator, null, resolve)
  })
}
// generator_run(get_student()).then(res => {
//   console.log("result", res)
// })

async function test() {
  const res = await get("getStudentNames")
  const res2 = await get("getStudentIdByName", res.data[0].name)
  const res3 = await get("getStudentGenderById", res2.data.id)
  return { test: res3.data.gender + "222" }
}

test().then(res => {
  console.log("result", res)
})
