const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const orderschema = new Schema({

    order_status:{type:String,required:true},
 


},{strict:false});
var orderdata=mongoose.model('order_tb',orderschema);
module.exports=orderdata;