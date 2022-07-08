import {useState} from "react";

function SearchBar() {
    const [term, setTerm] = useState('')
    const search = () => {
        console.log("asdf", term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
    }

    const onKeyDownHandler = (e) => {
        //e.key === "Enter" && search() to samo co if na dole
        if (e.key === "Enter") {
            search();
        }
    }

    return (
        <div className="d-flex">
            <input value={term}
                   onChange={updateTerm}
                   onKeyDown={onKeyDownHandler}
                   type="text"
                   className='form-control'
                   placeholder="Szukaj..."/>

            <button onClick={search}
                    className='btn btn-primary'>Szukaj
            </button>
        </div>
    )
}

export default SearchBar;