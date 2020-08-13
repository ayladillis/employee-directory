import React from 'react';
import employees from "../../employees.json";
import Table from "../Table/Table";

class App extends React.Component {

    state = {
        employees: employees,
        allEmployees: employees,
        sortBy: 'alphabetical'
    }

    sort = () => {
        const newEmployeesArray = this.state.employees;
        if (this.state.sortBy === 'alphabetical') {
            this.setState({
                sortBy: 'reverse',
                employees: newEmployeesArray.sort((employee1, employee2) => {
                    if (employee1.email > employee2.email) {
                        return 1;
                    }
                    if (employee1.email < employee2.email) {
                        return -1;
                    }
                    return 0;
                })
            })
        } else {
            this.setState({
                sortBy: 'alphabetical',
                employees: newEmployeesArray.sort((employee1, employee2) => {
                    if (employee1.email < employee2.email) {
                        return 1;
                    }
                    if (employee1.email > employee2.email) {
                        return -1;
                    }
                    return 0;
                })
            })
        }
    }

    filter = (event) => {
        const searchValue = event.target.value;

        if (searchValue === '') {
            this.setState({
                employees: this.state.allEmployees,
            })
        }
        else {
            this.setState({
                employees: this.state.allEmployees.filter(employee => {
                    if (employee.name.includes(searchValue)) {
                        return true 
                    } else {
                        return false
                    }
                })
            })
        }
    }

    render(){
        return (
            <>
            <nav1 className="navbar navbar-light bg-light">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={this.filter}
            />
            </nav1>

        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">
                    <button onClick={this.sort}>Email</button>
                </th>
                <th scope="col">Number</th>
                </tr>
            </thead>
            {this.state.employees.map(employee => (
                <Table
                    key={ employee.id}
                    image={employee.image}
                    name={ employee.name }
                    email={ employee.email }
                    number={ employee.number }
                    sort={this.sort}
                    />
            ))}
        </table>
        </>
        )
    }
}

export default App;