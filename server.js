const express = require('express')
const app = express()

app.get('/', (req, ans) => {
    ans.send({ message: 'Basic Test!' })
})

module.exports = app

