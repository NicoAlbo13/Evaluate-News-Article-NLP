var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = requiere('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

console.log(__dirname)

// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, ()=>{
    console.log(`Server running on localhost: ${port}`)
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
