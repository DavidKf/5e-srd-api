var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var WeaponPropertySchema   = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('WeaponProperty', WeaponPropertySchema, 'weapon-properties');