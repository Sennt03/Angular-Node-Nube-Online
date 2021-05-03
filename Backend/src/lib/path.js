const Imagen = require('../models/Imagen')
const Video = require('../models/Video')

const fs = require('fs-extra')
const cloudinary = require('cloudinary')
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
})

module.exports = {
    processPath: (path) => {
        if(path){
            if(path.includes('-')){
                let pathProcess = path.replace(/-/g, '/')
                return pathProcess
            }else{
                return path
            }
        }else{
            return '/'
        }
        
    },

    isDir: (path, pathComplete) => {

        if(path.indexOf('.') <= -1){
            if(fs.existsSync(pathComplete)){
                return true
            }else{ 
                return false
            }
        }else{
            return false 
        }
    },

    getName: (path) => {
        let inicio = path.lastIndexOf('/')
        let final = path.lastIndexOf('.')
        inicio++
        let nombre = path.substring(inicio, final)
        return nombre
    },

    getExt: (nombre) => {
        let inicio = nombre.lastIndexOf('.')
        inicio++
        let ext = nombre.substring(inicio)
        return ext
    },

    isFile: (path, pathComplete) => {
        if(path.indexOf('.') > -1){
            if(fs.existsSync(pathComplete)){
                return true
            }
            return false
        }else{
            return false
        }
    },

    fileExist: (path) => {
        if(fs.existsSync(path)){
            return true
        }else{
            return false
        }
    },

    uploadImgOvid: async (file, ext, path, type, carpeta, userId) => {
        const pathComplete = path + '/' + file.name
        file.mv(pathComplete)
        const { join } = require('path')
        const pathClou = join(path, '/'+file.name)

        const response = await cloudinary.v2.uploader.upload(pathClou)
        const imageUrl = response.secure_url
        const public_id = response.public_id

        fs.unlink(pathComplete)
        rutaArchivo = ''
        if(carpeta == '/'){
            rutaArchivo = file.name
        }else{
            rutaArchivo = carpeta+'/'+file.name
        }
        if(type == 'imagen'){
            const image = await Imagen.findOne({userId, rutaArchivo})
            if(image){
                return 'false'
            }else{
                
                const newImage = new Imagen({userId, carpeta, rutaArchivo, name: file.name,ext, size: file.size, url: imageUrl, public_id})
                console.log(newImage)
                await newImage.save()
                return 'true'
            }
        }else if(type == 'video'){
            const newVideo = new Video({userId, carpeta, name: file.name,ext, size: file.size, url: imageUrl, public_id})
            await newVideo.save()
            
            return
        }
    },

    deleteImage: async (publicId) => {
        await cloudinary.v2.uploader.destroy(publicId)
    }
    
}