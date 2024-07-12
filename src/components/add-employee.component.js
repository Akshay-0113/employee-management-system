import React,
{
	useState,
	useEffect
} from "react";
import axios from 'axios';
import EmpForm
	from "./EmpForm";

const AddEmployee = () => {
	const [formValues, setFormValues] =
		useState(
			{
				name: '',
				email: '',
				location: '',
                phone: '',
                department: '',
                dob: '',
                gender: '',
                salary: '',
                employmentType: ''
			})
	const onSubmit = empObject => {
		axios.post('http://localhost:5000/add-employee',empObject)
			.then(res => {
				if (res.status === 200){
					alert('Employee successfully added')
					window.location.reload();
				}
				else
					Promise.reject()
			})
			.catch(err => alert('Something went wrong'))
	}

	return (
		<EmpForm initialValues={formValues}
			onSubmit={onSubmit}
			enableReinitialize>
			Add Employee
		</EmpForm>
	)
}

export default AddEmployee
