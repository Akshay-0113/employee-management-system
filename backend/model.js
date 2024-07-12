const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    empId: { type: Number, required: true, unique: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: Number, required: true },
    department: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String },
    employmentType: { type: String },
    salary: { type: Number }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
