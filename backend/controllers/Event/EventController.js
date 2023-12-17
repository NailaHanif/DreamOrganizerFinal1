const eventModel = require("../../model/Event");
const customReferences = require("../../references/customReferences");
const formData = customReferences.multer();
const authenticateMiddleware = require("../../middleWare/authenticateToken"); // Import your authentication middleware

customReferences.app.use('/public/assets/images/events', customReferences.express.static('public'));


// customReferences.app.use(authenticateMiddleware);

// Image upload middleware
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
      cb(new Error("Invalid file type. Only JPEG and PNG are allowed."));
    }
  },
});

// Route for adding an event
customReferences.app.post('/addEvent', upload.single('Event_image'), async (req, res) => {
  try {
    const newEvent = new eventModel({
      Event_category: req.body.Event_category,
      Event_title: req.body.Event_title,
      Event_description: req.body.Event_description,
      Event_price: req.body.Event_price,
      Event_image: req.file.filename,
    });

    const savedEvent = await newEvent.save();

    if (savedEvent) {
      res.send({ "save": true, "newEvent": savedEvent });
      console.log(savedEvent);
    } else {
      res.send({ "save": false });
      console.log("data not saved ");

    }
  } catch (error) {
    console.error('Error saving data to MongoDB', error);
    res.status(500).send('Internal Server Error');
  }
});

// Rest of your routes...
// ...

// Ensure to update your other routes such as deleteSingleEvent, editSingleEvent, updateCategory1 accordingly.
