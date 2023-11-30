const customReferences =require("../references/customReferences");
const vendorSchema=customReferences.mongoose.Schema({
   "vendorName": String,
   "vendorEmail": String,
   "cnic": String,
   "vendorPassword": String,
   isActive:{
      type:Boolean
   }

})
module.exports=customReferences.mongoose.model('vendors',vendorSchema)