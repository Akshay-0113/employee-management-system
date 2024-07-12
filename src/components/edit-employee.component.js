import React,
{
	useState,
	useEffect
} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import EmpForm
	from "./EmpForm";

const EditEmployee = (props) => {
	const {empId} = useParams();
	const history = useNavigate();
	const [formValues, setFormValues] =
		useState(
			{	
				name: "",
				email: "",
				location: '',
                phone: '',
                department: '',
                dob: '',
                gender: '',
                salary: '',
                employmentType: ''
			});
	const onSubmit = (empObject) => {
		axios.post("http://localhost:5000/edit-employee/" +empId, empObject)
			.then((res) => {
				if (res.status === 200) {
					alert("Employee details successfully updated");
					history("/employee-list");
				} else Promise.reject();
			})
			.catch((err) =>	alert("Something went wrong"));
	};

	useEffect(() => {
		axios.get("http://localhost:5000/edit-employee/"+ empId)
			.then((res) => {
				const {
					name,
					email,
					location,
                    phone,
                    department,
                    dob,
                    gender,
                    salary,
                    employmentType
				} = res.data;
				setFormValues(
					{
						name,
						email,
						location,
                        phone,
                        department,
                        dob,
                        gender,
                        salary,
                        employmentType
					});
			})
			.catch(
				(err) =>
					console.log(err)
			);
	});

	return (
		<EmpForm
			initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Edit Employee
		</EmpForm>
	);
};

export default EditEmployee;
