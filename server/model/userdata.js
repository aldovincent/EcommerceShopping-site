const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const userschema = new Schema({
      login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
      name:{type:String,required:true},
      mobile:{type:String,required:true},
      address:{type:String,required:true},
      email:{type:String,required:true},


},{strict:false});
var userdata=mongoose.model('user_tb',userschema);
module.exports=userdata;