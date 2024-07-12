import React,
{
	useState,
	useEffect
} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import axios from "axios";
import EmpDisp
	from "./EmpDisp";

// due to lack of time i duplicated the add employee form and made certain changes to give view employee page. it can be improved

const ViewEmployee = (props) => {
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

	useEffect(() => {
		axios.get("http://localhost:5000/view-employee/"+ empId)
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
		<EmpDisp
			initialValues={formValues}
			// onSubmit={onSubmit}
			enableReinitialize>
		</EmpDisp>
	);
};

export default ViewEmployee;
