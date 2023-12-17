const customReferences = require('../references/customReferences');
const EventSchema = customReferences.mongoose.Schema({
    "Event_title":String,
    "Event_price":Number,
    "Event_description":String,
    "Event_category":String,
    'Event_image':String,
   });

   module.exports = customReferences.mongoose.model('events',EventSchema);