var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var EventSchema = new Schema({
  time : Number
}, { collection : 'events', discriminatorKey : '_type' });

mongoose.model('Event', EventSchema);

module.exports = EventSchema;