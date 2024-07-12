import React,
{
	useState,
	useEffect
} from "react";
import axios
	from "axios";
import { Table }
	from "react-bootstrap";
import EmployeeTableRow
	from "./EmployeeTableRow";

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/employee-list/")
			.then(({ data }) => {
				setEmployees(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const DataTable = () => {
		return employees.map((res, i) => {
			return <EmployeeTableRow
				obj={res} key={i} />;
		});
	};

	return (
		<div className="table-wrapper">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Employee ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>{DataTable()}</tbody>
			</Table>
		</div>
	);
};

export default EmployeeList;
