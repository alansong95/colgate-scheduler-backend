const express = require('express')
const app = express()
const port = 4000

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/colgateDB', function (err, client) {
  if (err) throw err

  var db = client.db('colgateDB')

  db.collection('courses').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

