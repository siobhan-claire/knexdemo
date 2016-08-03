var express = require('express')
var bodyParser = require('body-parser')
var db = require('./db')
var PORT = process.env.PORT || 3000

var app = express()
app.use(bodyParser.json())

app.get('/users/:id', function(req, res) {
  var id = req.params.id
  db.getUser(id)
  .then(function (data) {
    res.send(data)
  })
  .catch(function (err) {
    res.sendStatus(500)
    console.log(err)
  })
})

app.get('/users', function(req, res) {
  db.getUsers()
  .then(function (data) {
    res.send(data)
  })
  .catch(function (err) {
    res.sendStatus(500)
    console.log(err)
  })
})

app.post('/users', function(req, res) {
  var name = req.body.name
  var description = req.body.description
  var id = req.body.id

  db.createUser(id, name, description)
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function (err) {
      res.sendStatus(500)
      console.log(err)
    })
})

app.put('/users', function (req, res) {
  var id = req.body.id
  var update = req.body.update

  db.updateUser(id, update)
  .then(function () {
    res.sendStatus(200)
  })
  .catch(function (err) {
    res.sendStatus(500)
    console.log(err)
  })
})

app.delete('/users', function (req, res) {
  var id = req.body.id
  db.deleteUser(id)
  .then(function () {
    res.sendStatus(200)
  })
  .catch(function (err) {
    res.sendStatus(500)
    console.log(err)
  })
})

app.listen(PORT, function() {
  console.log('Server is listening ' + PORT)
})
