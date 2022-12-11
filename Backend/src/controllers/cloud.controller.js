const { processPath, isDir, getName, getExt, isFile, fileExist, uploadImgOvid, deleteImage } = require('../lib/path')
const fs = require('fs-extra')
const path = require('path')
const Imagen = require('../models/Imagen')

const controller = {
    registerDir: async (req, res) => {
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId)
        try{
            await fs.mkdir(pathComplete)
            res.send({message: 'Nuevo espacio registrado, !Bienvenido¡'})
        }catch(e){
            if(e.code == 'EEXIST'){
                res.status(200).send({message: '!Bienvenido¡'})
            }else{
                res.status(500).send('Ha ocurrido un error al registrar el espacio')
            }
        }
    },

    openDir: async (req, res) => {
        let mipath = processPath(req.params.path)
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)
        if (!isDir(mipath, pathComplete)) {
            res.status(403).json({ message: 'La carpeta no existe' })
        } else {
            const dir = await fs.opendir(pathComplete)
            const content = { files: [], directories: [], images: [] }

            for await (dirent of dir) {
                if (dirent.isDirectory()) {
                    content.directories.push(dirent.name)
                } else {
                    if(dirent.name != 'archivoDeAccion.api.senntcloud.txt'){
                        content.files.push(dirent.name)
                    }
                }
            }

            const images = await Imagen.find({userId: req.userId, carpeta: mipath})
            images.forEach(imagen => {
                content.images.push(imagen.name)
            });
            
            res.json({ path: mipath, content })
        }

    },

    detailFile: async (req, res) => {
        const mipath = processPath(req.params.path)
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)

        if(isFile(mipath, pathComplete)){
            const file = await fs.stat(pathComplete)
            const details = {
                name: getName(mipath),
                size: file.size,
                ext: getExt(mipath)
            }
            res.send({ path: mipath, details })
        }else{
            res.status(403).json({ message: 'El archivo no existe' })
        }
    },

    getImage: async (req, res) => {
        const mipath = processPath(req.params.path)
        const image = await Imagen.findOne({userId: req.userId, rutaArchivo: mipath})
        if(image){
            res.status(200).send(image)
        }else{
            res.status(400).send({message: 'La imagen no existe'})
        }
    },

    downloadFile: (req, res) => {
        const mipath = processPath(req.params.path)
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)

        if(isFile(mipath, pathComplete)){
            let name = getName(mipath)
            res.setHeader('Content-disposition', `attachment; filename=${name}`);

            res.download(pathComplete)
        }else{
            res.status(403).json({ message: 'El archivo no existe' })
        }
    },

    createDir: async (req, res) => {
        let { name } = req.body
        name = name.trim()
        
        const mipath = processPath(req.params.path)
        if(!name){
            res.status(403).send({message: 'Envie el nombre porfavor'})
            return
        }
        if(name.indexOf('-') > -1 || name.indexOf('.') > -1){
            res.status(403).send({message: 'El nombre no puede incluir puntos o guiones'})
            return
        }
        const pathComplete = path.join(__dirname, '../../Cloud/'+ req.userId + '/' + mipath+'/'+name)
        try{
            await fs.mkdir(pathComplete)
            // Copiar archvio para que el servidor no la elimine por estar vacia
            // const fileToCopy = path.join(__dirname, '../../Cloud/central/archivoDeAccion.api.senntcloud.txt')
            // const pathCompleteToCopy = path.join(pathComplete, 'archivoDeAccion.api.senntcloud.txt')
            // await fs.copyFile(fileToCopy, pathCompleteToCopy)

            res.send({message: 'Carpeta creada correctamente'})
        }catch(e){
            if(e.code == 'ENOENT'){
                res.status(403).send({message: 'Ruta inexistente'})
            }else if(e.code == 'EEXIST'){
                res.status(403).send({message: 'La carpeta ya existe'})
            }else{
                res.status(403).send({message: 'Ha ocurrido un error inesperado'})
            }
        }

    },

    uploadFile: async (req, res) => {
        if(!req.files){
            res.status(403).send({message: 'Envie algun archivo porfavor'})
            return
        }

        const mipath = processPath(req.params.path)
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)

        const file = req.files.file
        let ext = path.extname(file.name)
        ext = ext.toLowerCase()
        // Comprobamos si el archivo es una imagen o video para subirlo a un servidor externo
        if(ext == '.jpg' || ext == '.jpeg' || ext == '.png' || ext == '.gif'){
            if(file.name.indexOf('-') > -1){
                res.status(403).send({message: 'El nombre de la imagen no puede incluir guiones'})
                return
            }else{
                const resultUp = await uploadImgOvid(file, ext, pathComplete, 'imagen', mipath, req.userId)
                if(resultUp == 'false'){
                    res.status(400).send({message: 'El archivo ya existe'})
                }else{
                    res.send({message: 'Imagen subida correctamente'})
                }
                
                return
            }
        }else if(ext == '.mov' || ext == '.dvd' || ext == '.avi' || ext == '.avi' || ext == '.mkv' || ext == '.mp4'){
            res.send({message: 'Por el momento no soportamos subida de video'})
            return
        }else if(ext == '.mp3' || ext == '.mid' || ext == '.midi' || ext == '.wav' || ext == '.wma'){
            res.send({message: 'Por el momento no soportamos subida de audio'})
            return
        }

        // Si no es un video o imagen lo subimos aqui
        
        if (!isDir(mipath, pathComplete)) {
            res.status(403).send({message: 'Ruta inexistente'})
        }else{
            if(!fileExist(pathComplete + '/' + file.name)){
                if(file.name.indexOf('-') > -1){
                    res.status(403).send({message: 'El nombre del archivo no puede incluir guiones'})
                    return
                }else if(file.name == 'archivoDeAccion.api.senntcloud.txt'){
                    res.status(403).send({message: 'No se puede subir un archivo con ese nombre'})
                }else{
                    await file.mv(pathComplete + '/' + file.name)
                    res.status(200).send({message: 'Archivo subido correctamente'})
                }
            }else{
                res.status(403).send({message: 'El archivo ya existe'})
            }
        }
    },

    downloadImage: (req, res) => {
        const imageDownloader = require('../lib/image-downloader').download;
        const { url, name } = req.body
        const imageUrl = url

        const filename = 'src/public/uploads/'+name

        imageDownloader(imageUrl, filename, function(){
            res.status(200).download(filename)
        });
        setTimeout(() => {
            fs.unlink(filename)
        }, 5000)

    },

    deleteFile: async (req, res) => {
        let mipath = processPath(req.params.path)
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)
        try{
            await fs.rm(pathComplete)
        }catch(e){
            if(e.code == 'ENOENT'){
                res.status(403).send({message: 'La ruta no existe'})
            }else if(e.info.code == 'EISDIR'){
                let images = await Imagen.find({userId: req.userId, carpeta: mipath})
                
                for(const imagen of images){
                    await Imagen.findByIdAndDelete(imagen._id)
                }
                try{
                    // await fs.rmdir(pathComplete)
                    await fs.rmdirSync(pathComplete, { recursive: true });
                }catch(e){
                    res.status(403).send({message: 'Ha ocurrido un error al eliminar la carpeta'})
                }
            }else{
                res.status(403).send({message: 'Ha ocurrido un error'})
            }
        }
        let inicio = mipath.lastIndexOf('/')
        inicio++
        let nombre = mipath.substring(inicio)
        res.send({message: `'${nombre}' Eliminado correctamente`})
    },

    copiar: (req, res) => {
        let { newPath } = req.body
        newPath = processPath(newPath)
        let mipath = processPath(req.params.path)
        let inicio = mipath.lastIndexOf('/')
        inicio++
        let name = mipath.substring(inicio)
        
        newPath = newPath + '/' + name
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)
        const newPathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + newPath)

        try{
            fs.copySync(pathComplete, newPathComplete)
        }catch(e){
            if(e.code == 'ENOENT'){
                res.status(403).send({message: 'La ruta del archivo o carpeta no existe'})
            }else{
                res.status(403).send({message: `'${name}', Ya existe en esta ruta`})
            }
        }

        res.status(200).send({message: `'${name}', Copiado correctamente`})
    },

    mover: async (req, res) => {
        let { newPath } = req.body
        newPath = processPath(newPath)
        let mipath = processPath(req.params.path)
        let inicio = mipath.lastIndexOf('/')
        inicio++
        let name = mipath.substring(inicio)
        
        newPath = newPath + '/' + name
        const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)
        const newPathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + newPath)

        try{
            fs.moveSync(pathComplete, newPathComplete)
        }catch(e){
            if(e.code == 'ENOENT'){
                res.status(403).send({message: 'Ruta inexistente'})
            }else{
                res.status(403).send({message: `'${name}', Ya existe en esta ruta`})
            }
        }
        res.status(200).send({message: `'${name}', Movido correctamente`})
    },

    renombrar: async (req, res) => {
        let { name } = req.body
        if(!name){
            res.status(403).send({message: 'Envie el nombre porfavor'})
        }
        let nameComp = name
        if(nameComp.indexOf('-') > -1){
            res.status(403).send({message: 'El nombre no puede incluir guiones'})
            return
        }else{
            let mipath = processPath(req.params.path)
            let fin = mipath.lastIndexOf('/')
            fin++
            let newPath = mipath.slice(0, fin)
            let copyTemp = newPath + req.userId
            newPath = newPath + name

            const pathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + mipath)
            const copyTempComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + copyTemp)
            const newPathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + newPath)
            if(fs.existsSync(newPathComplete)){
                res.status(403).send({message: `'${name}', Ya existe`})
                return
            }
            try{
                fs.copySync(pathComplete, copyTempComplete)
                try{
                    await fs.rm(pathComplete)
                }catch(e){
                    if(nameComp.indexOf('-') > -1 || nameComp.indexOf('.') > -1){
                        try{
                            await fs.rm(copyTempComplete)
                        }catch(e){
                            fs.rmdirSync(copyTempComplete, { recursive: true });
                        }
                        res.status(403).send({message: 'El nombre no puede incluir guiones o puntos'})
                        return
                    }
                    fs.rmdirSync(pathComplete, { recursive: true })
                }
                fs.copySync(copyTempComplete, newPathComplete)
                try{
                    await fs.rm(copyTempComplete)
                }catch(e){
                    fs.rmdirSync(copyTempComplete, { recursive: true });
                }
            }catch(e){
                if(e.code == 'ENOENT'){
                    res.status(403).send({message: 'La ruta del archivo o carpeta no existe'})
                }else{
                    res.status(403).send({message: 'Ha ocurrido un error'})
                }
            }

            res.status(200).send({message: `Se renombro a '${name}', correctamente`})
        }
    },

    deleteImage: async (req, res) => {
        let mipath = processPath(req.params.path)
        const image = await Imagen.findOne({userId: req.userId, rutaArchivo: mipath})
        if(!image){
            res.status(403).send({message: 'La imagen no existe'})
            return
        }
        try{
            await Imagen.findByIdAndDelete(image._id)
        }catch(e){
            res.status(403).send({message: 'Ha ocurrido un error'})
        }
        res.status(200).send({message: 'Imagen eliminada correctamente'})
    },

    renameImage: async (req, res) => {
        let mipath = processPath(req.params.path)
        let { name } = req.body
        const image = await Imagen.findOne({userId: req.userId, rutaArchivo: mipath})
        if(!image){
            res.status(403).send({message: 'La imagen no existe'})
            return
        }
        if(!name){
            res.status(403).send({message: 'Envie el nombre porfavor'})
            return
        }
        let nameComp = name
        if(nameComp.indexOf('-') > -1){
            res.status(403).send({message: 'El nombre no puede incluir guiones'})
            return
        }
        const imageComp = await Imagen.findOne({userId: req.userId, carpeta: image.carpeta, name})
        if(imageComp){
            res.status(403).send({message: 'El nombre de la imagen ya esta en uso'})
            return
        }

        let newRuta = image.rutaArchivo
        let fin = newRuta.lastIndexOf('/')
        fin++
        newRuta = newRuta.slice(0, fin)
        newRuta = newRuta + name
        image.name = name
        image.rutaArchivo = newRuta
        try{
            await Imagen.findByIdAndUpdate(image._id, image)
        }catch(e){
            res.status(403).send({message: 'Ha ocurrido un error'})
        }
        res.status(200).send({message: 'Imagen renombrada correctamente'})
    },

    moveImage: async (req, res) => {
        let mipath = processPath(req.params.path)
        let { newPath } = req.body
        
        if(!newPath){
            res.status(403).send({message: 'Envie la nueva ruta'})
            return
        }
        const image = await Imagen.findOne({userId: req.userId, rutaArchivo: mipath})
        if(!image){
            res.status(403).send({message: 'La imagen no existe'})
            return
        }
        newPath = processPath(newPath)
        let newPathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + newPath)
        if(!isDir(newPath, newPathComplete)){
            res.status(403).send({message: 'La nueva ruta no existe'})
            return
        }
        let inicio = mipath.lastIndexOf('/')
        inicio++
        let name = mipath.substring(inicio)
        let carpeta = newPath
        newPath = newPath + '/' + name

        let compImage = await Imagen.findOne({userId: req.userId, rutaArchivo: newPath}) 
        if(compImage){
            res.status(403).send({message: 'La imagen ya existe'})
            return
        }
        image.carpeta = carpeta
        image.rutaArchivo = newPath

        try{
            await Imagen.findByIdAndUpdate(image._id, image)
        }catch(e){
            res.status(403).send({message: 'Ha ocurrido un error'})
        }
        res.status(200).send({message: 'Imagen movida correctamente'})
    },

    copyImage: async (req, res) => {
        let mipath = processPath(req.params.path)
        let { newPath } = req.body
        console.log(newPath)
        console.log(req.body)
        if(!newPath){
            res.status(403).send({message: 'Envie la nueva ruta'})
            return
        }
        const image = await Imagen.findOne({userId: req.userId, rutaArchivo: mipath})
        if(!image){
            res.status(403).send({message: 'La imagen no existe'})
            return
        }
        newPath = processPath(newPath)
        let newPathComplete = path.join(__dirname, '../../Cloud/' + req.userId + '/' + newPath)
        if(!isDir(newPath, newPathComplete)){
            res.status(403).send({message: 'La nueva ruta no existe'})
            return
        }
        let inicio = mipath.lastIndexOf('/')
        inicio++
        let name = mipath.substring(inicio)
        let carpeta = newPath
        newPath = newPath + '/' + name

        let compImage = await Imagen.findOne({userId: req.userId, rutaArchivo: newPath}) 
        if(compImage){
            res.status(403).send({message: 'La imagen ya existe'})
            return
        }
        image.carpeta = carpeta
        image.rutaArchivo = newPath

        let newImagen = new Imagen()
        newImagen.userId = image.userId
        newImagen.name = image.name
        newImagen.carpeta = image.carpeta
        newImagen.rutaArchivo = image.rutaArchivo
        newImagen.ext = image.ext
        newImagen.size = image.size
        newImagen.url = image.url
        newImagen.public_id = image.public_id
        try{
            await newImagen.save()
        }catch(e){
            res.status(403).send({message: 'Ha ocurrido un error'})
        }
        res.status(200).send({message: 'Imagen copiada correctamente'})
    }
}

module.exports = controller