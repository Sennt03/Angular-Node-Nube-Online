const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/User')

module.exports = {
    verifyToken: async (req, res, next) => {
        try{
            const token = req.header('Authorization')
        
            if(!token) return res.status(403).json({message: 'No token provided'})

            const decoded = jwt.verify(token, config.SECRET)
            req.userId = decoded.id

            const user = await User.findById(req.userId, {password: 0})
            if(!user) return res.status(404).json({message: 'El usuario no existe'})
            next()
        }catch(e){
            return res.status(500).json({message: 'Unauthorized'})
        }
    },

    verifyId: (req, res, next) => {
        if(req.userId != req.body._id) return res.status(403).json({message: 'El token y el id no coinciden'})

        next()
    }
    
}