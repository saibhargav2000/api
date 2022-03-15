const MONGOOSE = require('mongoose');
const USERSCHEMA = new MONGOOSE.Schema({
name: {
type: String,
required: '<h3>Name is required</h3>',
},
email: {
type: String,
unique: true,
match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
required: 'Email address is required',
},
age: {
type: Number,
required: '<h3>Age is required</h3>',
validate: {
validator: (v) => {
return v >= 18 ? true : false
},
message: 'Age is not a valid must be greater than or equal to 18'
}
},
gender: {
type: String,
required: 'Gender is required',
},
mobNumber: {
type: Number,
required: 'Mobile Number is required',
validate: {
validator: (v) => {
return /^[0-9]{10}$/.test(v);
},
message: 'Mobile Number is not a valid 10 digit number!'
}
},
city: {
type: String,
required: 'City is required',
},
state: {
type: String,
required: 'State is required',
},
country: {
type: String,
required: 'Country is required',
},
birthday: {
type: String,
required: 'Date Of Birth is required is required',
validate: {
validator: (v) => {
return /^\d{2}[./-]\d{2}[./-]\d{4}$/.test(v);
},
message: 'Please Enter Date in the correct Form DD-MM-YYYY or DD.MM.YYYY'
}
},
address1: {
type: String,
required: 'Address is required is required',
},
address2: {
type: String,
},
});
module.exports = MONGOOSE.model('users', USERSCHEMA);