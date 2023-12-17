const customReferences = require('../references/customReferences');

const categorySchema = customReferences.mongoose.Schema({
    category_name: { type: String, unique: true },
    category_image: { type: String, unique: true },
    SubCategory: [{ type: customReferences.mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }],

});


module.exports = customReferences.mongoose.model('Category', categorySchema);
