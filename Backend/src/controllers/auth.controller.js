const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config')

const controller = {
    signUp: async (req, res) => {
        const { username, email, password } = req.body

        const newUser = new User({
            username,
            email,
            password: await User.encryptPassword(password)
        })

        const saveUser = await newUser.save()
        
        const token = jwt.sign({id: saveUser._id}, config.SECRET, {
            expiresIn: 21500 // Expira en 6h
        })

        res.json({token, user: saveUser})
    },
    
    signIn: async (req, res) => {
        const userFound = await User.findOne({email: req.body.email})
        if(!userFound){
            res.status(400).json({message: 'El email no existe'})
        }

        const mathPassword = await User.comparePassword(req.body.password, userFound.password)
 
        if(!mathPassword){
            return res.status(401).json({token: null, message: 'Contraseña incorrecta'})
        }
        
        const token = await jwt.sign({id: userFound._id}, config.SECRET, {
            expiresIn: 21500
        })
        res.json({token, user: userFound})
    }
}

module.exports = controller