import React, {useState} from "react";

function SearchBar() {
    const [term, setTerm] = useState('')
    const search = () => {
        console.log("asdf", term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div className="d-flex">
            <input value={term}
                   onChange={updateTerm}
                   type="text"
                   className='form-control'
                   placeholder="Szukaj..."/>

            <button onClick={search}
                    className='btn btn-primary'>Szukaj</button>
        </div>
    )
}

export default SearchBar;