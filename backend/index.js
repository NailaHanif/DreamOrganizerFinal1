const customReferences = require('./references/customReferences');
require("./database/config");
require("./controllers/Auth/CustomerAuth/customerAuthController");
require('./controllers/Auth/VendorAuth/vendorAuthController')
require('./controllers/Auth/AdminAuth/adminAuthController')
require("./controllers/Event/EventController")
require('./controllers/Category/categoryController')
require('./controllers/SubCategory/subCategoryController');



customReferences.app.listen(8888);
