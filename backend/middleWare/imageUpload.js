const customReferences = require("../references/customReferences");

const imageUpload = ()=>{
    return ( customReferences.multer({
        
        storage: customReferences.multer.diskStorage({
          destination: (req, file, cb) => {
            cb(null,"/public/assets/images/");
          },
          filename: (req, file, cb) => {
            return cd(null,`${Date.now()}-${file.originalname}`)
          },
        }),
      })
      )
    }
module.exports = imageUpload;