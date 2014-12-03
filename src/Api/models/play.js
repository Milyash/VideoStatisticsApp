var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend'),
    Schema = mongoose.Schema,
    EventSchema = require('./event.js');

var PlaySchema = EventSchema.extend({
  page_url: String,
  video_url: String,
  video_id: String,
  time: Number,
});

module.exports = mongoose.model('Play', PlaySchema);