const { Router } = require('express')
const router = Router()
const UserController = require('../controllers/userController')
const { verifyToken, verifyId } = require('../middlewares/authjwt')

router.post('/getUser', [ verifyToken, verifyId ], UserController.getUserById)

module.exports = router