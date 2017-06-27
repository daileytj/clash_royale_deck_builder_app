const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const DeckSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  strategy: {
    type: String,
    required: true
  },
  customDeck: {
    type: Object,
  required:true
  }
});

DeckSchema.methods.apiRepr = function() {
  return {
    title: this.title|| '',
    strategy: this.strategy || '',
    customDeck: this.customDeck || ''
  };
};

const Deck = mongoose.model('Deck', DeckSchema);

module.exports = {Deck};
