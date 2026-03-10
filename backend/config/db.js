import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(`${process.env.MONGODB_URI}/InvoiceAI`)
    .then(() => {
        console.log("DB CONNECTED");
    })
}