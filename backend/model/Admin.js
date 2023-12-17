const customereferences=require('../references/customReferences');
const newAdmin=customereferences.mongoose.Schema({
   
    password:String,
    email:String
})
module.exports=customereferences.mongoose.model('admin',newAdmin)