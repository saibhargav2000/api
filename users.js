const EXPRESS = require('express');
const ROUTER = EXPRESS.Router()
const USERS = require('../models/user');
ROUTER.get('/', async (req, res) => {
try {
const USERSDB = await USERS.find()
res.json(USERSDB)
} catch(err) {
res.send('Error ' + err);
}
});
ROUTER.post('/', async(req, res) => {
const USER = new USERS({
name: req.body.name,
age: req.body.age,
gender: req.body.gender,
city: req.body.city,
state: req.body.state,
country: req.body.country,
birthday: req.body.birthday,
mobNumber: req.body.mobNumber,
address1: req.body.address1,
address2: req.body.address2,
email: req.body.email,
});
try {
const DATA = await USER.save();
res.json({
DATA,
status: "successful",
message: "user Created Successfully"
});
} catch(err) {
res.status(400).json({
message: "Bad request",
error: err.message
})
}
})
ROUTER.get('/:id', async(req, res) => {
try {
const USERSDB = await USERS.findById(req.params.id)
res.status(200).json({
USERSDB,
status: "successful",
})
} catch(err) {
res.status(404).json({
status: 'unsuccessful',
message: "User Not Found or Bad Request"
});
}
})
ROUTER.patch('/:id', async(req, res) => {
try {
const UPDATES = req.body;
const USERSDB = await USERS.findByIdAndUpdate(req.params.id, UPDATES, {
new: true,
})
res.status(200).json({
USERSDB,
status: "successful",
message: "user updated successfully"
})
} catch(err) {
res.status(404).json({
status: 'unsuccessful',
message: "User Not Found"
});
}
})
ROUTER.delete('/:id', async(req, res) => {
try {
const DATA = await USERS.findByIdAndRemove(req.params.id);
if(DATA) {
res.json({
DATA,
status: "successful",
message: "user Deleted Successfully"
});
} else {
res.status(404).json({
status: 'unsuccessful',
message: "User Not Found"
});
}
} catch(err) {
res.status(404).json({
status: 'unsuccessful',
message: "User Not Found or deleted!!"
});
}
})
module.exports = ROUTER;