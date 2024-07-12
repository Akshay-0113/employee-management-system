import React from "react";

import { Nav, Navbar, Container, Row, Col }
	from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import {
	BrowserRouter as Router, Routes,
	Route, Link
} from "react-router-dom";


import AddEmployee from
	"./components/add-employee.component";
import EditEmployee from
	"./components/edit-employee.component";
import EmployeeList from
	"./components/employee-list.component";
import ViewEmployee from
	"./components/view-employee.component";


const App = () => {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Navbar bg="dark" variant="dark">
						<Container>
							<Navbar.Brand>
								<Link to={"/employee-list"}
									className="nav-link">
									Employee Management System
								</Link>
							</Navbar.Brand>

							<Nav className="justify-content-end">
								<Nav>
									<Link to={"/add-employee"}
										className="nav-link">
										Create Employee
									</Link>
								</Nav>

								<Nav>
									<Link to={"/employee-list"}
										className="nav-link">
										Employee List
									</Link>
								</Nav>
							</Nav>
						</Container>
					</Navbar>
				</header>

				<Container>
					<Row>
						<Col md={12}>
							<div className="wrapper">
								<Routes>
									<Route path="/"
										element={<EmployeeList/>} />
									<Route path="/add-employee"
										element={<AddEmployee/>} />
									<Route path="/edit-employee/:empId"
										element={<EditEmployee/>} />
									<Route path="/employee-list"
										element={<EmployeeList/>} />
									<Route path="/view-employee/:empId"
										element={<ViewEmployee/>} />

								</Routes>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</Router>
	);
};

export default App;