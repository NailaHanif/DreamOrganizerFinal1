const eventModel = require("../../model/Event");
const categoryModel=require('../../model/Category')
const customReferences = require("../../references/customReferences");
const formData = customReferences.multer();
const storage = customReferences.multer.memoryStorage();
const upload = customReferences.multer({ storage: storage });

// customReferences.app.post("/addCategory",  (request, response) => {
//   categoryModel.create(req.body)
//   .then(category=> response.json(category))
//   .catch(err=>response.json(err))
// });
customReferences.app.post("/addCategory", formData.none(), async (request, response) => {
  const newCategory = new categoryModel({
    category_name: request.body.category_name,
  });

  try {
    const result = await newCategory.save();
    console.log(result);
    if (result) {
      response.send({ "save": true, "newcategory": result });
    } else {
      response.send({ "save": false });
    }
  } catch (error) {
    console.error('Error saving data to MongoDB', error);
    response.status(500).send('Internal Server Error');
  }
});
customReferences.app.put('/updateCategory/:id', async (request, response) => {
  const categoryId = request.params.id;
  const updatedCategoryName = request.body.category_name;

  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      categoryId,
      { category_name: updatedCategoryName },
      { new: true } // Returns the updated document
    );

    if (updatedCategory) {
      response.json({ success: true, updatedCategory });
    } else {
      response.json({ success: false, message: 'Category not found' });
    }
  } catch (error) {
    console.error('Error updating category:', error);
    response.status(500).json({ success: false, message: 'Internal Server Error' });
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

  customReferences.app.get("/getCategories", async (request, response) => {
    try {
      const categories = await categoryModel.find();
      response.json(categories);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });
 
  customReferences.app.get('/viewAllCategories', async (req, res) => {
    try {
      const category = await categoryModel.find();
      res.json(category);
      console.log(category)
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  customReferences.app.post("/deleteSingleEvent", formData.none(), async (request, response) => {
    
    const res = await eventModel.deleteOne({"_id":request.body.id});
  
    if(res != null)
    {
      response.send({"delete":true});
    }else
    {
      response.send({"delete":false});
    }
  });
  customReferences.app.post("/editSingleEvent", formData.none(), async (request, response) => {
    const res = await eventModel.findOne({"_id":request.body.id});
    if(res != null)
    {
      response.send({"match":true,"singleEvent":res});
    }else
    {
      response.send({"singleEvent":[]});
    }
  });

  customReferences.app.post("/updateCategory1", formData.none(), async (request, response) => {
    const res = await eventModel.updateOne({"_id":request.body.id},{$set:request.body});
    if(res.acknowledged && res.matchedCount==1)
    {
      response.send({"update":true});
    }else
    {
      response.send({"update":false});
    }
  });
  customReferences.app.post('/addProduct', upload.single('productImage'), async (req, res) => {
    
      const newEvent=new eventModel({
         Event_category : req.body.Event_category,
         Event_title : req.body.Event_title,
         Event_description :req.body.Event_description,
         Event_price :req.body.Event_price,
       Event_Image:req.body.Event_Image
      })
      try {
        const res = await newEvent.save();
        console.log(res);
        console.log("event added.");
        if (res) {
          response.send({ "save": true, "newEvent": res });
        } else {
          response.send({ "save": false });
        }
      } catch (error) {
        console.error('Error saving data to MongoDB', error);
        response.status(500).send('Internal Server Error');
      }
  
    // Process the uploaded image (req.file.buffer contains image data)
    // Save product details to MongoDB
  
  });
  
  