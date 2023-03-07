const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name:{type:String,required:true},
    adminId: {type:Number,}
})

exports.Category = mongoose.model('store',storeSchema);