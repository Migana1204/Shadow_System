import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dwitpwiu0",
    api_key: "431176285442419",
    api_secret: "qpnjmoLnt3Q8lJhBfH7YYT5OO1w"
})

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'Proyect Imgs'
    })
}

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}