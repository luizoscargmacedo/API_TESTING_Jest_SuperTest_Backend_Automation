const app = require('./server')
const port = 3000

app.listen(port, () => {
    console.log(`Basic example app listening at http://localhost:${port}`)
})

//npm start