var students = [
  { name: "a", id: 1, gender: "female" },
  { name: "b", id: 2, gender: "male" }
]

var student = {
  start: function(app) {
    app.get("/getStudentNames", function(req, res) {
      var response = { data: students.map(x => ({ name: x.name })) }
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.send(response)
    })

    app.get("/getStudentIdByName", function(req, res) {
      const name = req.query.data
      var response = { data: { id: students.find(x => x.name == name).id } }
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.send(response)
    })

    app.get("/getStudentGenderById", function(req, res) {
      var id = req.query.data
      var response = { data: { gender: students.find(x => x.id == id).gender } }
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.send(response)
    })
  }
}

module.exports=student
