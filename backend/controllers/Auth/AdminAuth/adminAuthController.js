const adminModel = require("../../../model/Admin");
const customReferences = require("../../../references/customReferences");
const formData = customReferences.multer();


customReferences.app.post("/adminLogin", formData.none(), async (request, response) => {
  try {
    const { email, password } = request.body;
    const admin = await adminModel.findOne({ email, password });

    if (admin) {
      response.send({ match: true, LoggedInadmin: admin });
    } else {
      response.send({ match: false, emailMatch: false, passwordMatch: false });
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    response.status(500).send("Internal Server Error");
  }
});



