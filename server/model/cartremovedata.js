const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const cartremoveschema = new Schema({
    cart_id:{type:Schema.Types.ObjectId,ref:"cart_tb"},


},{strict:false});
var cartremovedata=mongoose.model('cartremove_tb',cartremoveschema);
module.exports=cartremovedata;