const customerModel = require("../../../model/Customer");
const customReferences = require("../../../references/customReferences");
const formData = customReferences.multer();

const bcrypt = require('bcrypt');

// new user addition
customReferences.app.post("/customerSignup", formData.none(), async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const existingUser = await customerModel.findOne({ email });
    if (existingUser) {
      return response.json({
        save: false,
        message: "A user with the same email already exists.",
      });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds (e.g., 10) based on your security needs

    const newCustomer = new customerModel({
      name,
      email,
      password: hashedPassword, // Save the hashed password
    });

    const result = await newCustomer.save();
    console.log(result);

    if (result) {
      response.send({ "save": true, "newCustomer": result });
    } else {
      response.send({ "save": false });
    }
  } catch (error) {
    console.error('Error during customer signup:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
});

  
customReferences.app.post("/customerLogin", formData.none(), async (request, response) => {
    try {
      const { email, password } = request.body;
      const customer = await customerModel.findOne({ email });
  
      if (customer) {
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (isPasswordValid) {
          response.send({ match: true, loggedInUser: customer });
        } else {
          response.send({ match: false });
        }
      } else {
        response.send({ match: false });
      }
    } catch (error) {
      console.error('Error during customer login:', error);
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  customReferences.app.get('/viewAllCustomers', async (req, res) => {
    try {
      const customer = await customerModel.find();
      res.json(customer);
      console.log(customer)
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  // In your Express app
  customReferences.app.delete('/deleteCustomer/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
      console.log('Deleting customer with ID:', customerId);
      // Perform the deletion in the database
      const result = await customerModel.findByIdAndDelete(customerId);
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
  
  
  