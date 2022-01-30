var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, ()=>{
    console.log(`Server running on localhost: ${port}`)
})

const apiKey = process.env.API_KEY

app.get('/key', function (req, res){
    res.send(apiKey)
})

let projectData = {}

app.post('/add', message)

function message(req, res){
    postData={
        response: req.body.response
    }
    Object.assign(projectData, postData)
    res.send(projectData)
}

app.get('/all', sendData);

function sendData(req, res){
    res.send(projectData);
}
