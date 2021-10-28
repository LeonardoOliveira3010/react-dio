const user = require('./user')
const express = require('express')
// const { name, email } = require('./user')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send(console.log(user.name))
    res.send(console.log(user.email))
    
})


app.listen(3000, () => console.log('server running'))