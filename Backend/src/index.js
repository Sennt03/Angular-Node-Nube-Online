// Requires
const express =  require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')

// if(process.env.NODE_ENV != 'production'){
    require('dotenv').config()
// }

// Inicializaciones
const app = express()
require('./database')

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(fileUpload())


// Routes
app.use('/api/senntcloud', require('./routes/auth.routes'))
app.use('/api/senntcloud', require('./routes/user.routes'))
app.use('/api/senntcloud/cloud', require('./routes/cloud.routes'))

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// Server
app.listen(app.get('port'), () => console.log('Server on port: '+app.get('port')))
