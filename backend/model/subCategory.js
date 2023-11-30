const customReferences = require('../references/customReferences');
const subCategorySchema = customReferences.mongoose.Schema({
    "subCategory_name":{type:String,unique:true},
    "subCategory_image":{type:String,unique:true}
    
});
//subCategorySchema.index({subCategory_image:1},{ unique:true});


module.exports = customReferences.mongoose.model('subCategories',subCategorySchema);