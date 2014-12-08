var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var EventSchema = new Schema({
  page_url: String,
  video_url: String,
  video_id: String,
  time : Number
}, { collection : 'events', discriminatorKey : '_type' });

mongoose.model('Event', EventSchema);

module.exports = EventSchema;