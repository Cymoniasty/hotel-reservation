import {useState} from "react";
import PropTypes from "prop-types";

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function SearchBar(props) {
    const [term, setTerm] = useState('')

    const search = () => {
        props.onSearch(term)
    }
    const updateTerm = (e) => {
        setTerm(e.target.value);
    }

    const onKeyDownHandler = (e) => {
        //e.key === "Enter" && search() to samo co if na dole
        if (e.key === "Enter") {
            search()
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

SearchBar.propTypes = propTypes;

export default SearchBar;