const User = require('../models/User')

module.exports = {

    checkUserEmail: async (req, res, next) => {
        const user = await User.findOne({email: req.body.email})

        if(user) return res.status(400).json({message: 'El email ya esta registrado'})
        
        next()
    }
    
}