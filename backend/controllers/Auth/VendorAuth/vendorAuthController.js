const vendorModel=require('../../../model/vendor')
const customReferences = require("../../../references/customReferences");
const formData = customReferences.multer();
const bcrypt = require('bcrypt');

customReferences.app.post("/vendorSignup", formData.none(), async (request, response) => {
  try{
  const { vendorName, vendorEmail, vendorPassword } = request.body;

    const hashedPassword = await bcrypt.hash(vendorPassword, 10); // You can adjust the saltRounds (e.g., 10) based on your security needs
    const newVendor = new vendorModel({
      vendorName, vendorEmail, vendorPassword: hashedPassword, // Save the hashed password
    });
    const result = await newVendor.save();
    console.log(result);

    if (result) {
      response.send({ "save": true, "newVendor": result });
    } else {
      response.send({ "save": false });
    }
  } catch (error) {
    console.error('Error during vendor signup:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

    
  
customReferences.app.post("/vendorLogin", formData.none(), async (request, response) => {
  try {
    const { email, password } = request.body;

    // Find the user by email
    const vendor = await vendorModel.findOne({ email });

    if (vendor) {
      // Compare the provided password with the stored hashed password
      const isPasswordMatch = await bcrypt.compare(password, vendor.password);

      if (isPasswordMatch) {
        response.json({"match": true, "loggedInUser": vendor});
      } else {
        response.json({"match": false});
      }
    } else {
      response.json({"match": false});
    }
  } catch (error) {
    response.status(500).json({ error: "Internal server error." });
  }
});
  customReferences.app.get('/viewAllVendors', async (req, res) => {
    try {
      const vendor = await vendorModel.find();
      res.json(vendor);
      console.log(vendor)
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  customReferences.app.delete('/deleteVendor/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
      console.log('Deleting customer with ID:', customerId);
      // Perform the deletion in the database
      const result = await vendorModel.findByIdAndDelete(customerId);
      console.log('Delete result:', result);
      // Check if the customer was found and deleted
      if (result) {
        res.json({ success: true, message: 'Customer deleted successfully' });
      } else {
        res.json({ success: false, message: 'Customer not found' });
      }
    } catch (error) {
      console.error('Error deleting customer:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });