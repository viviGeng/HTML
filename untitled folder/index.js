var express = require("express")
var app = express()
var noti = require("./notification")
var result = require("./response")
var profile = require("./profile")
var config = require("./config")
var urlPrefix = `http://${config.host}:${config.port}`
app.get("/communityNotification/search", function(req, res) {
  var page = parseInt(req.query.page)
  var size = parseInt(req.query.size)
  var pre_page, nex_page
  var time = parseInt(new Date().getTime() / 1000)
  //console.log("time",time);
  //console.log(config.host,config.port)
  result._embedded.profiles[0] = profile.profiles[page]
  for (var i = 0; i < size; i++) {
    result._embedded.notifications[i]=noti.notifications[(i + page) % 8]
        result._embedded.notifications[i].createdAt = 1547049600-100000*page -300*i;
    result._embedded.notifications[i].payload.subject =
      result._embedded.profiles[0].username
  }

  if(page==0){
    result._embedded.lastViewTime = 1547048500
    }

  result._embedded.lastViewTime = time
  result.page.size = size
  result.page.number = page
  result._links.self.href =`${urlPrefix}/communityNotification/search?page=${page}&size=${size}`
  result._links.first.href = `${urlPrefix}/communityNotification/search?page=0&size=${size}`
  result._links.last.href =`${urlPrefix}/communityNotification/search?page=${(result.page.totalPages - 1)}&size=${size}`
  if (page == 0) {
    pre_page = page
    nex_page = page + 1
  } else if (page == result.page.totalPages - 1) {
    pre_page = page - 1
    nex_page = page
  } else {
    pre_page = page - 1
    nex_page = page + 1
  }
  result._links.prev.href =
    `${urlPrefix}/communityNotification/search?page=${pre_page}&size=${size}`
  result._links.next.href =
    `${urlPrefix}/communityNotification/search?page=${nex_page}&size=${size}`
  // console.log("notification",response)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send(result)
})
app.listen(config.port)
