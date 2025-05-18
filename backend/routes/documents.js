const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Get document by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  let doc = await Document.findById(id);
  if (!doc) {
    doc = await Document.create({ _id: id, data: null });
  }
  res.json(doc);
});

module.exports = router;
