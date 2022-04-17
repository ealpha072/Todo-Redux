import mongoose from "mongoose";

const CONNECTION_URI = process.env.MONGO_URI

const connection = () => {
    try {
        mongoose.connect(CONNECTION_URI, {useNewUrlParser:true, useUnifiedTopology:true})
        console.log('Connection success')
    } catch (error) {
        console.log(error.message);
    }
}

export default connection