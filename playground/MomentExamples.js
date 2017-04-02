var Moment = require('moment');

console.log(Moment().format());

var now = Moment();

console.log('Current timestamp', now.unix());

var timestamp = 1490550009;
var currentMoment = Moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM

console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
