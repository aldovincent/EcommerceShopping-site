const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const productschema = new Schema({
    // product_id:{type:schema.Types.objectID,ref:"product_tb"},
    product_name:{type: String,required:true},
    // category_id:{type:String,required:true},
    product_image:{type:String,required:true},
    price:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    quantity:{type:String,required:true},


},{strict:false});
var productdata=mongoose.model('product_tb',productschema);
module.exports=productdata;