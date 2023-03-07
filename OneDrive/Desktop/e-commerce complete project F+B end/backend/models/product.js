const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String,required:true},
    imageUrl:{type:String, default:''}, 
    storeId:{type:Number,required:true },
    price:{type:Number,default:0},
    quantity:{type:Number,required:true,min:0},
    
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required:true
    }
});
exports.Product = mongoose.model('Product',productSchema);