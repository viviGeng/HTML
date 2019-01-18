var express = require("express")
var app = express()

app.get("/test", function(req, res) {
  res.end()
})
app.listen(3000)
