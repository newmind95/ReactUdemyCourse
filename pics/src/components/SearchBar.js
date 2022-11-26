import './SearchBar.css'
import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {

    // Create a new piece of state.
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };
 
    // Create an event handler to watch for the 'onChange' event.
    const handleChange = (event) => {
        // When the 'onChange' events fire, get the value from the input.
        setTerm(event.target.value); 
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    );
};

export default SearchBar;
