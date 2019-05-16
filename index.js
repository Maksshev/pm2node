const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const pm = require('pm2')
const axios = require('axios');








pm.connect(function (err) {
    if (err) {
        console.log(err)
        process.exit(2)
    }


    pm.launchBus(function (err, bus) {

        console.log('connected to launchBus')


        bus.on('process:exception', (e) => {
            const url = 'https://enigmatic-mesa-58023.herokuapp.com/%20'
            axios.post(url, e)
        })
    })

})



app.use(bodyParser.json())





app.get('/', (req, res) => {
    console.log('smth')
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/error', (req, res) => {
    setTimeout(() => {throw new Error()}, 0)
})










const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});