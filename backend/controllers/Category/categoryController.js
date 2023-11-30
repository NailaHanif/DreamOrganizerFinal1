const categoryModel=require('../../model/Category')
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
    console.log("Request body:", request.body);
    // console.log("Request file:", request.file);

    if (!request.file) {
      return response.status(400).send("No file uploaded.");
    }

    

    const newCategory = new categoryModel({
      category_name: request.body.category_name, // Update if needed
      category_image: request.file.filename
    });

    const result = await newCategory.save();
    console.log("Result:", result);

    if (result) {
      response.send({ "save": true, "newcategory": result });
    }  else {
      // Handle failure due to uniqueness constraint violation
      console.log('Data is not saved successfully - Unique constraint violation');

      // Check which constraint was violated
      // if (result.duplicateName) {
      //   response.status(400).send({ "save": false, error: 'Duplicate category name' });
      // } else if (result.duplicateImage) {
      //   response.status(400).send({ "save": false, error: 'Duplicate category image' });
      // } else {
      //   response.status(500).send({ "save": false, error: 'Internal Server Error' });
      // }
    }
  } catch (error) {
    console.error('Error saving data to MongoDB', error);
    response.status(500).send('Internal Server Error');
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
    const categories = await categoryModel.find().populate('subcategories');
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

  

 

customReferences.app.post("/updateCategory/:id", upload.single("category_image"), async (request, response) => {
  try {
    const categoryId = request.params.id;
    const categoryToUpdate = await categoryModel.findById(categoryId);

    if (!categoryToUpdate) {
      return response.status(404).send('Category not found');
    }

    // Update category data
    categoryToUpdate.category_name = request.body.newCategoryName;
    console.log(categoryToUpdate)
    if (request.file) {
      categoryToUpdate.category_image = request.file.filename;
    }

    const result = await categoryToUpdate.save();
    console.log("Result:", result);

    if (result) {
      response.send({ "save": true, "updatedCategory": result });
      console.log(result);
    } else {
      response.send({ "save": false });
    }
  } catch (error) {
    console.error('Error updating data to MongoDB', error);
    response.status(500).send('Internal Server Error');
  }
});


