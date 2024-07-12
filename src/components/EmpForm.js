import React from "react";
import * as Yup from "yup";
import {
	Formik, Form,
	Field, ErrorMessage
} from "formik";
import {
	FormGroup,
	FormControl, Button
} from "react-bootstrap";

const EmpForm = (props) => {
	const validationSchema =
		Yup.object().shape({
			name: Yup.string().required("Required"),
			email: Yup.string()
				.email(`Enter a valid email address`)
				.required("Required"),
			location: Yup.string().required("Required"),
			phone: Yup.number().required("Required"),
			department: Yup.string().required("Required"),
			dob: Yup.date().required("Required"),
			gender: Yup.string(),
			employmentType: Yup.string(),
			salary: Yup.number()
		});
	console.log(props);
	return (
		<div className="form-wrapper">
			<Formik {...props}
				validationSchema={validationSchema}>
				<Form>
					<FormGroup>
						<label htmlFor="name">Full Name</label>
						<Field name="name" type="text"
							className="form-control" placeholder="Enter fullname" />
						<ErrorMessage
							name="name"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="email">Email</label>
						<Field name="email"
							type="text"
							className="form-control" placeholder="Enter email" />
						<ErrorMessage
							name="email"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="location">Location</label>
						<Field name="location"
							type="text"
							className="form-control" placeholder="Enter work location" />
						<ErrorMessage
							name="location"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="phone">Phone Number</label>
						<Field name="phone"
							type="number"
							className="form-control" placeholder="Phone Number" />
						<ErrorMessage
							name="phone"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="department">Department</label>
						<Field name="department"
							type="text"
							className="form-control" placeholder="Enter Department" />
						<ErrorMessage
							name="department"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="dob">Date of Birth</label>
						<Field name="dob"
							type="date"
							className="form-control" placeholder="Enter date of birth" />
						<ErrorMessage
							name="dob"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<label htmlFor="gender">Gender</label>
						<Field name="gender"
							type="text"
							className="form-control" placeholder="Enter your gender" />
					</FormGroup>
					<FormGroup>
						<label htmlFor="employmentType">Employment Type</label>
						<Field name="employmentType"
							as="select"
							className="form-control">
							<option value="full-time">
								Full-time
							</option>
							<option value="part-time">
								Part-time
							</option>
							<option value="contract">
								Contract
							</option>
							<option value="intern">
								Intern
							</option>
						</Field>
					</FormGroup>
					<FormGroup>
						<label htmlFor="salary">Salary</label>
						<Field name="salary"
							type="text"
							className="form-control" placeholder="Enter salary" />
						<ErrorMessage
							name="salary"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<Button variant="danger" size="md"
						block="block" type="submit">
						{props.children}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default EmpForm;
