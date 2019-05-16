const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())





app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/error', (req, res) => {
    setTimeout(() => {throw new Error()}, 0)
})





const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});