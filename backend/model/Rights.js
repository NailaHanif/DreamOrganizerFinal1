const customreferences= require("../references/customReferences");
const rightsSchema=customreferences.mongoose.Schema({
    right:{
        type:String,
        unique:true,
        require:true
    },
    staff_id:{
        type:customreferences.mongoose.Schema.Types.ObjectId,
        ref:"Staff"
    }
},{
    timesStamp:true
})
module.exports=customreferences.mongoose.model("Right",rightsSchema)