import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        LOUDINARYapi_key: process.env.C_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    });

}

export default connectCloudinary;