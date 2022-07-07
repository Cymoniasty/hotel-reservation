import React from "react";

function SearchBar() {
    return (
        <div className="d-flex">
            <input type="text" className='form-control' placeholder="Szukaj..."/>
            <button className='btn btn-primary'>Szukaj</button>
        </div>
    )
}

export default SearchBar;