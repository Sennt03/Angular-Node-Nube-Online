const { Schema, model } = require('mongoose')

const ImagenSchema = new Schema({
    userId: String,
    carpeta: String,
    rutaArchivo: String,
    name: String,
    ext: String,
    size: String,
    url: String,
    public_id: String
})

module.exports = model('imagenes', ImagenSchema)