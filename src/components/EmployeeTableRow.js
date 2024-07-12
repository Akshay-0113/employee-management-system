import React from "react";
import { Button }
	from "react-bootstrap";
import { Link }
	from "react-router-dom";
import axios from "axios";

const EmployeeTableRow =
	(props) => {
		const {
			empId,
			name,
			email,
		} = props.obj;

		const deleteEmployee = () => {
			axios.delete("http://localhost:5000/delete-employee/" + empId)
				.then((res) => {
					if (res.status === 200) {
						alert("Employee details successfully deleted");
						window.location.reload();
					} else Promise.reject();
				})
				.catch(
					(err) =>
						alert("Something went wrong"));
		};

		return (
			<tr>
                <td>{empId}</td>
				<td>{name}</td>
				<td>{email}</td>
				<td>
					<Link className="view-link"
						to={"/view-employee/" + empId}>
						View
					</Link>
					<Link className="edit-link"
						to={"/edit-employee/" + empId}>
						Edit
					</Link>
					<Button
						onClick={deleteEmployee}
						size="sm" variant="danger">
						Delete
					</Button>
				</td>
			</tr>
		);
	};

export default EmployeeTableRow;
