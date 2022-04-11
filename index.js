var moment = require("moment");

console.log("hey");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var name = "Molly";
console.log(`Hello ${name}`);
