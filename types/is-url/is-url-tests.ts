
import isUrl = require('is-url');

var isValid0: boolean = isUrl('https://github.com/segmentio/is-url');
var isValid1: boolean = isUrl('hogepiyo');
var isValid2: boolean = isUrl('');
var isValid3: boolean = isUrl(undefined);
var isValid4: boolean = isUrl(4);
var isValid5: boolean = isUrl({});
var isValid6: boolean = isUrl(true);
