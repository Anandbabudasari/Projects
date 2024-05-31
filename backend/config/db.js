import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://ananddasari49:anand@cluster0.ax2zw2g.mongodb.net/food-del').then(()=>console.log("DB connected"));
}