var mongoose = require('mongoose')
  , connection

function go() {
  var kittySchema = mongoose.Schema({
    name: String
  })
    , Kitten = mongoose.model('Kitten', kittySchema)
    , fluffy = new Kitten({ name: 'fluffy' })

  function onKittenSave(err, kitten) {
    if (err) {
      console.log('save failed')
    } else {
      console.log('save succeeded')
    }
  }

  fluffy.save(onKittenSave)
}

mongoose.connect('mongodb://localhost/sandbox')
connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'))
connection.once('open', go)
