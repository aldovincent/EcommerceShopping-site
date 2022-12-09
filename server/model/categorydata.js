const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const categoryschema = new Schema({
    category_name:{type: String,required:true},


},{strict:false});
var categorydata=mongoose.model('category_tb',categoryschema);
module.exports=categorydata;