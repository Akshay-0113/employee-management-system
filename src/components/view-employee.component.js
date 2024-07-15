import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Function to format date to dd-mm-yyyy
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const ViewEmployee = () => {
    const [employee, setEmployee] = useState(null);
    const { empId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/view-employee/`+empId)
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [empId]);

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div className="table-wrapper2">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Employee ID:</td>
                        <td>{employee.empId}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{employee.email}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>{employee.location}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{employee.phone}</td>
                    </tr>
                    <tr>
                        <td>Department:</td>
                        <td>{employee.department}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth:</td>
                        <td>{formatDate(employee.dob)}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{employee.gender}</td>
                    </tr>
                    <tr>
                        <td>Salary:</td>
                        <td>{employee.salary}</td>
                    </tr>
                    <tr>
                        <td>Employment Type:</td>
                        <td>{employee.employmentType}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ViewEmployee;
