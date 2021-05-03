const { Router } = require('express')
const router = Router()
const CloudController = require('../controllers/cloud.controller')
const { verifyToken, verifyId } = require('../middlewares/authjwt')

router.post('/register', [verifyToken, verifyId], CloudController.registerDir)
/* DETAIL */
router.post('/openDir/:path?', [verifyToken, verifyId], CloudController.openDir)
router.post('/detailFile/:path?', [verifyToken, verifyId], CloudController.detailFile)
router.post('/getImage/:path?', [verifyToken, verifyId], CloudController.getImage)
/* UPLOAD & DOWLOAD */
router.post('/downloadFile/:path?', [verifyToken, verifyId], CloudController.downloadFile)
router.post('/downloadImage', [verifyToken, verifyId], CloudController.downloadImage)
router.post('/createDir/:path?', [verifyToken, verifyId], CloudController.createDir)
router.post('/uploadFile/:path?', [verifyToken, verifyId], CloudController.uploadFile)
/* ACCIONES */
router.post('/delete/:path', [verifyToken, verifyId], CloudController.deleteFile)
router.post('/copy/:path', [verifyToken, verifyId], CloudController.copiar)
router.post('/move/:path', [verifyToken, verifyId], CloudController.mover)
router.post('/rename/:path', [verifyToken, verifyId], CloudController.renombrar)
/* ACCIONES CON IMAGENES */
router.post('/deleteImage/:path', [verifyToken, verifyId], CloudController.deleteImage)
router.post('/copyImage/:path', [verifyToken, verifyId], CloudController.copyImage)
router.post('/moveImage/:path', [verifyToken, verifyId], CloudController.moveImage)
router.post('/renameImage/:path', [verifyToken, verifyId], CloudController.renameImage)
module.exports = router