const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const singleproductschema = new Schema({
   product_id:{type:Schema.Types.ObjectId,ref:"product_tb"},

  
},{strict:false});
var singleproductdata=mongoose.model('singleproduct_tb',singleproductschema);
module.exports=singleproductdata;