const mongoos = require('mongoose');

const categorySchema = mongoose.Schema({
    title:{type:String,required:true},
 icon:{
    type:String,
 },
 color: {
    type:String,
 }

})

exports.Category = mongoose.model('category',categorySchema);