var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  time : Number
}, { collection : 'events', discriminatorKey : '_type' });

var PlaySchema = EventSchema.extend({
  play: String
});

var Event = mongoose.model('Event', EventSchema),
	Play = mongoose.model('Play', PlaySchema);

module.exports = mongoose.model('Play', PlaySchema);