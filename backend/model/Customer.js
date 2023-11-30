const customReferences = require('../references/customReferences');
const customerSchema = customReferences.mongoose.Schema({
    "name":String,
    "email":String,
    "password":String,
    "isActive":Boolean
   });

   module.exports = customReferences.mongoose.model('customers',customerSchema);