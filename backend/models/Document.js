const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  _id: String, // document ID (could be UUID or custom)
  data: Object, // Draft.js raw editor state
});

module.exports = mongoose.model('Document', DocumentSchema);
