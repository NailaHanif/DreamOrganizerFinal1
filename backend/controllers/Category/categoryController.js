const categoryModel = require('../../model/Category')
const customReferences = require("../../references/customReferences");
// image jahan store krani a uska path
customReferences.app.use('/public/assets/images', customReferences.express.static('public'));

//............image upload complete Middleware....

const storage = customReferences.multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, "./public"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = customReferences.multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    //  Accept only JPEG and PNG files
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG and PNG are allowed.")
      );
      return response.status(400).send("Invalid file type. Only JPEG and PNG are allowed.");
    }
  },
});
//............image upload complete Middleware....

customReferences.app.post("/addCategory", upload.single("category_image"), async (request, response) => {
 
try {
  const newCategory = new categoryModel({
    category_name: request.body.category_name,
    category_image: request.file.filename
  });

  const result = await newCategory.save();
  response.send({ "save": true, "newcategory": result });
} catch (error) {
  if (error.code === 11000 && error.keyPattern.category_name) {
    response.send({ "save": false, error: 'Duplicate category name' });
  } else if (error.code === 11000 && error.keyPattern.category_image) {
    response.send({ "save": false, error: 'Duplicate category image' });
  } else {
    console.error('Error saving data to MongoDB', error);
    response.status(500).send({ "save": false, error: 'Internal Server Error' });
  }
}

});
customReferences.app.delete('/deleteCategory/:id', async (request, response) => {
  const categoryId = request.params.id;

  try {
    // Find the category by ID and remove it
    const deletedCategory = await categoryModel.findByIdAndRemove(categoryId);

    if (deletedCategory) {
      response.json({ success: true, deletedCategory });
    } else {
      response.json({ success: false, message: 'Category not found' });
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    response.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


customReferences.app.get('/viewAllCategories', async (req, res) => {
  try {
    const categories = await categoryModel.find().populate('SubCategory');

    const categoriesWithImageUrl = categories.map(item => ({
      ...item._doc,
      category_image: `${item.category_image}`,
    }));
    res.json(categoriesWithImageUrl);
    console.log(categoriesWithImageUrl);
  } catch (error) {
    console.error('Error fetching category data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




customReferences.app.put("/updateCategory/:id", upload.single("category_image"), async (request, response) => {
  try {
    // Check if a file is uploaded
    if (!request.file) {
      return response.status(400).json({ error: 'No file uploaded' });
    }

    const categoryId = request.params.id;

    console.log("Request Body:", request.body);
    console.log("Request File:", request.file);

    let obj = {
      _id: categoryId,
      category_name: request.body.category_name,
      category_image: request.file.filename,
    };

    console.log("Update Object:", obj);

    const result = await categoryModel.updateOne({ _id: categoryId }, { $set: obj });

    if (result) {
      response.send({ update: true });
    } else {
      response.send({ update: false });
    }
  } catch (error) {
    console.error(error);
    response.status(500).send({ update: false });
  }
});






customReferences.app.get('/fetchCategory/:id', upload.single("category_image"), async (request, response) => {
  const categoryId = request.params.id;

  try {
    // Find the category by ID
    const category = await categoryModel.findById(categoryId);

    if (category) {
      console.log(categoryId);
      response.json(category);
    } else {
      response.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.error('Error fetching category details:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});


