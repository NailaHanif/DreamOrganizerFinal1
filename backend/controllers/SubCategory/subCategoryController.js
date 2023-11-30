const customReferences = require("../../references/customReferences")
const subCategoryModel = require('../../model/subCategory');
const categoryModel = require('../../model/Category');

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
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only JPEG and PNG are allowed."));
    }
  },
});

customReferences.app.get('/getCategories', async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (previous code)

customReferences.app.post("/addSubCategory", upload.single("subCategory_image"), async (request, response) => {
  try {
    if (!request.file) {
      return response.status(400).send("No file uploaded.");
    }

    const newSubCategory = new subCategoryModel({
      subCategory_name: request.body.subCategory_name,
      subCategory_image: request.file.filename,
      category: request.body.category,
    });

    const result = await newSubCategory.save();

    if (result) {
      response.send({ save: true, newSubCategory: result });
    } else {
      console.log('Data is not saved successfully');
    }
  } catch (error) {
    console.error('Error saving subCategory data to MongoDB', error);
    response.status(500).send('Internal Server Error');
  }
});

// ... (remaining code)


// Add other subcategory operations (update, delete, viewAll) similar to the category controller
customReferences.app.get('/viewSubCategories/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const subcategories = await subCategoryModel.find({ category: categoryId });
    res.json(subcategories);
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = customReferences.app;
