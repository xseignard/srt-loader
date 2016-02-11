var subParser = require('subtitles-parser');
module.exports = function(source) { return subParser.fromSrt(source, true) };
