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
// Fetch all categories
customReferences.app.get("/getCategories", async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add subcategory
// Add subcategory
// customReferences.app.post("/addSubCategory", upload.single("subCategory_image"), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).send("No file uploaded.");
//     }

//     // Assuming categoryId is passed in the request body
//     // const categoryId = req.body.categoryId;
//     // Check if categoryId is a valid ObjectId
//     // if (!customReferences.mongoose.Types.ObjectId.isValid(categoryId)) {
//     //   return res.status(400).send("Invalid category ID");
//     // }
//     const categoryId = req.body.categoryId; // Make sure to validate and extract the category ID
// const newSubCategory = new subCategoryModel({
//   subCategory_name: req.body.subCategory_name,
//   subCategory_image: req.file.filename,
//   categoryId: categoryId,
// });


//   let objId= new customReferences.mongoose.Types.ObjectId(newSubCategory.id)
//   console.log(objId)
//   await categoryModel.updateOne({
//     categoryId:categoryId
//   },{
//     $push:[
//       subCategory=objId
//     ]
//   })


//     const result = await newSubCategory.save();

//     if (result) {
//       // Populate the categoryId field before sending the response
//       const populatedSubCategory = await subCategoryModel.findById(result._id).populate('categoryId').exec();

//       res.send({ save: true, newSubCategoryId: populatedSubCategory });
//     } else {
//       console.log("Data is not saved successfully");
//       res.status(500).send("Internal Server Error");
//     }
//   } catch (error) {
//     console.error("Error saving subCategory data to MongoDB", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
customReferences.app.post("/addSubCategory", upload.single("subCategory_image"), async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).send("No file uploaded.");
      }

      const categoryId = req.body.categoryId; // Make sure to validate and extract the category ID
      const newSubCategory = new subCategoryModel({
          subCategory_name: req.body.subCategory_name,
          subCategory_image: req.file.filename,
          categoryId: categoryId,
      });

      const result = await newSubCategory.save();

      if (result) {
          // Push the _id of the new SubCategory into the SubCategory array of the corresponding Category
          await categoryModel.updateOne(
              { _id: categoryId },
              { $push: { SubCategory: result._id } }
          );

          // Populate the categoryId field before sending the response
          const populatedSubCategory = await subCategoryModel
              .findById(result._id)
              .populate("categoryId")
              .exec();

          res.send({ save: true, newSubCategoryId: populatedSubCategory });
      } else {
          console.log("Data is not saved successfully");
          res.status(500).send("Internal Server Error");
      }
  } catch (error) {
      console.error("Error saving subCategory data to MongoDB", error);
      res.status(500).send("Internal Server Error");
  }
});



// View subcategories for a specific category
customReferences.app.get("/viewSubCat", async (req, res) => {
  try {
    // const categoryId = req.body.ObjectId;
    const subcategories = await subCategoryModel.find().populate();
    // const subcategories = await subCategoryModel.find().populate("category");
 
    res.json(subcategories);
    console.log(subcategories)
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


