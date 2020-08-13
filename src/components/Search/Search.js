import React from "react";
import "./Search.css"

function Search (props) {
    return (
        <nav1 className="navbar navbar-light bg-light">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn  my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav1>
    );
}

export default Search;