const { Schema, model } = require('mongoose')

const VideoSchema = new Schema({
    userId: String,
    name: String,
    ext: String,
    size: String,
    url: String,
    public_id: String
})

module.exports = model('videos', VideoSchema)