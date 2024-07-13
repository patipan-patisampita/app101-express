const exprss = require('express')
const router = exprss.Router()

router.get('/', (req, res) => {
    return res.render('index')
})

router.get('/vision', (req, res) => {
    return res.render('vision')
})

module.exports =router