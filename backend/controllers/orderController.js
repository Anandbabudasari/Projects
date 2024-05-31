import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//placing user order from frontend

const placeOrder = async(req,res)=>{
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items: req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        res.status(200).json({message:"Order placed successfully"})
        
    } catch (error) {
        
    }

}

//getting all orders of a user

const userOrder = async(req,res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }

}


export {placeOrder,userOrder}