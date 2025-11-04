import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

cloudinary.config({
    cloud_name: "dp2lks0dw",
    api_key: "264787247343139",
    api_secret: "B8fcfqUtI4rtlycPoK1as8b98ag"
})

export async function uploadImage(req, res) {
    try {
        const { caminho } = req.body
        
        const result = await cloudinary.uploader.upload(caminho, {
            folder: "imagemAula",
            resource_type: "image"
        })

        return res.status(200).json({
            message: "Upload feito com sucesso!",
            url: result.secure_url
        })
    } catch (error) {
        return res.status(500).json({
             error: error.message 
        });
    }
}

export async function uploadVideo(req, res) {
    try {
        const { caminho } = req.body
        
        const result = await cloudinary.uploader.upload(caminho, {
            folder: "videoAula",
            resource_type: "video"
        })

        return res.status(200).json({
            message: "Upload feito com sucesso!",
            url: result.secure_url
        })
    } catch (error) {
        return res.status(500).json({
             error: error.message 
        });
    }
}