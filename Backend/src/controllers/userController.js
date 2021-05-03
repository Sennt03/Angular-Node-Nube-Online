const User = require('../models/User')
const controller = {
    getUserById: async (req, res) => {
        const user = await User.findById(req.userId, {password: 0})
        res.status(200).send(user)
    }
}

module.exports = controller