const mongoose = require('mongoose');

// -------------------------------------------------------------------------- //
// main schema
// -------------------------------------------------------------------------- //
const accountsSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  openedAt: Date,
});

// -------------------------------------------------------------------------- //
// exports
// -------------------------------------------------------------------------- //
export default accountsSchema;
