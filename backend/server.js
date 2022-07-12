const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()

app.use(express.json())

const admins = [
    {
        username: 'candidate1',
        password: 'P@ssw0rd'
    },
    {
        username: 'test',
        password: '123'
    }
]

app.get('/admins', authenticateToken, (req, res) => {
    res.json(admins.filter(admin => admin.username == req.user.name))
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })

}


app.listen(3001)