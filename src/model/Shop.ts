import mongoose  from "mongoose";
const menuItemSchema=new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number,required:true},
});
const shopSchema=new mongoose.Schema({

    user:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    shopName:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true, },
    deliveryPrice:{type:Number,required:true},
    estimatedDeliveryPrice:{type:Number,required:true},
    cuisines:[{type:String,required:true}],
    menuItems:[menuItemSchema],
    imageUrl:{type:String,required:true},
    lastUpdate:{type:Date,required:true}

});
const Shop=mongoose.model('Shop',shopSchema);
export default Shop;