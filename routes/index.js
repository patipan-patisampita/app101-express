const exprss = require('express')
const router = exprss.Router()

const db = require('../config/db')

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/vision', (req, res) => {
    return res.render('vision')
})

router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log('Error fetching data')
            res.status(500).send('Error retrieving users')
        }else{
            res.json(rows)
        }
    })
})

router.get('/login', (req, res) => {
    return res.render('auth/login')
})

router.get('/register', (req, res) => {
    res.render('auth/register')
})

module.exports = router
