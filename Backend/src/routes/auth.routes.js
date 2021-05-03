const { Router } = require('express')
const router = Router()
const AuthController = require('../controllers/auth.controller')
const { checkUserEmail } = require('../middlewares/verifySignup')

router.post('/signin', AuthController.signIn)

router.post('/signup', checkUserEmail, AuthController.signUp)

module.exports = router