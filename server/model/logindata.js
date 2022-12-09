const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/shoppingsite?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const loginschema = new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    // role:{type:String,required:true},

},{strict:false});
var logindata=mongoose.model('login_tb',loginschema);
module.exports=logindata;