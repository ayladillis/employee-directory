import React from "react";
import "./Table.css"

function Table (props) {
    return (
<table className="table table-striped">
    {/* add filter and sort functions here */}
    <thead>
        <tr>
        <th scope="col">Avatar</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Number</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row"><img src={props.image}/></th>
        <td> { props.name } </td>
        <td> { props.email } </td>
        <td> { props.number } </td>
        </tr>
    </tbody>
</table>
    );
}

export default Table;