var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  time : Number
}, { collection : 'events', discriminatorKey : '_type' });

var PauseSchema = EventSchema.extend({
  pause: String
});

var Pause = mongoose.model('Pause', PauseSchema);

module.exports = mongoose.model('Pause', PauseSchema);