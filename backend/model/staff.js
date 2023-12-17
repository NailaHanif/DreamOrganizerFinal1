const customreferences= require("../references/customReferences");
const staffSchema=customreferences.mongoose.Schema({
    name:{
        type:String,
        unique:true,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
},{
    timesStamp:true
})
module.exports=customreferences.mongoose.model("Staff",staffSchema)