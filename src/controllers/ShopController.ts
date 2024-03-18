import { Request,Response } from "express";
import Shop from "../model/Shop";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
const createMyShop=async(req:Request, res:Response)=>{
    try {
        const existShop = await Shop.findOne({user:req.userId});
        if(existShop){
            return res
               .status(409)
               .json({message:"User shop already exists"});

        }
        const image = req.file as Express.Multer.File;
        const base64Image=Buffer.from(image.buffer).toString("base64");
        const dataURI=`data:${image.mimetype};base64,${base64Image}`;

        const uploadResponse=await cloudinary.v2.uploader.upload(dataURI);

        const shop = new Shop(req.body);
        shop.imageUrl = uploadResponse.url;
        shop.user = new mongoose.Types.ObjectId(req.userId);
        shop.lastUpdate = new Date();
        await shop.save();
        res.status(201).send(shop);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
}
export default {
    createMyShop
}