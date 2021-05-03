const mongoose = require('mongoose')

mongoose.connect(process.env.URI_DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('DB connected'))
    .catch(e => console.log(e))