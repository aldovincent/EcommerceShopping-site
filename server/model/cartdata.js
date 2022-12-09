const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const cartSchema = new Schema({
    product_id:{type:Schema.Types.ObjectId,ref:"product_tb"},
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    count:{type:String,required:true},

});
var cartdata=mongoose.model('cart_tb',cartSchema);
module.exports=cartdata;