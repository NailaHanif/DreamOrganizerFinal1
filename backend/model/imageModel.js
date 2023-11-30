const customReferences = require("../references/customReferences");
const imageSchema = customReferences.mongoose.Schema({
    
    "image":String

   });

   module.exports = customReferences.mongoose.model('images',imageSchema);