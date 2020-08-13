import React from "react";
import "./Table.css"

function Table (props) {
    return (
        <tbody>
            <tr>
            <th scope="row"><img src={props.image}/></th>
                <td> { props.name } </td>
                <td> { props.email } </td>
                <td> { props.number } </td>
            </tr>
        </tbody>
    );
}

export default Table;