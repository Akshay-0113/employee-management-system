const router = require('express').Router();
const Employee = require('./model');

// Function to find the highest empId in the database
async function findHighestEmpId() {
    try {
        const highestEmployee = await Employee.findOne({}, { empId: 1 }).sort({ empId: -1 }).limit(1);
        if (highestEmployee) {
            return highestEmployee.empId + 1;
        }
        return 1; // If no employees exist, start with empId 1
    } catch (err) {
        console.error('Error finding highest empId:', err);
        throw err;
    }
}

// Get all employees
router.route('/employee-list').get( async (req, res) => {
    Employee.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new employee
router.route('/add-employee').post(async (req, res) => {
    try {
        const { name, email, location, phone, department, dob, gender, salary, employmentType } = req.body;

        const newId = await findHighestEmpId();

        const newEmployee = new Employee({
            empId: newId,
            name,
            email,
            location,
            phone: Number(phone),
            department,
            dob: new Date(dob),
            gender,
            salary: Number(salary),
            employmentType
        });

        await newEmployee.save();
        res.json('Employee added successfully!');
    } catch (err) {
        console.error('Error adding employee:', err);
        res.status(400).json('Error: ' + err);
    }
});

// View details of a specific employee
router.route('/view-employee/:empId').get( async (req, res) => {
    const empId = req.params.empId;
    Employee.findOne({ empId: empId })
        .then(employee => {
            if (!employee) {
                return res.status(404).json('Employee not found');
            }
            res.json(employee);
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update details of a specific employee
router.route('/edit-employee/:empId')

    .get( async (req, res) => {
        const empId = req.params.empId;
        Employee.findOne({ empId: empId })
            .then(employee => {
                if (!employee) {
                    return res.status(404).json('Employee not found');
                }
                res.json(employee);
            })
            .catch(err => res.status(400).json('Error: ' + err));
    })

    .post( async (req, res) => {
        const empId = req.params.empId;
        const { name, email, location, phone, department, dob, gender, salary, employmentType } = req.body;

        Employee.findOneAndUpdate({ empId: empId }, {
            name,
            email,
            location,
            phone: Number(phone),
            department,
            dob: new Date(dob),
            gender,
            salary: Number(salary),
            employmentType
        },
         { new: true })
            .then(updatedEmployee => {
                if (!updatedEmployee) {
                    return res.status(404).json('Employee not found');
                }
                res.json(updatedEmployee);
            })
            .catch(err => res.status(400).json('Error: ' + err));
});

// Delete an employee
router.route('/delete-employee/:empId').delete( async (req, res) => {
    const empId = req.params.empId;
    Employee.findOneAndDelete({ empId: empId })
        .then(employee => {
            if (!employee) {
                return res.status(404).json('Employee not found');
            }
            res.json('Employee details deleted successfully');
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
