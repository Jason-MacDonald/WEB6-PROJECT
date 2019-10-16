import React from 'react';

import './main.css'
import SearchForm from '../search-form/search-form';

// Returns the main front page component with SearchForm.
// Background is assigned in css.
const Main = () => {
    return (
        <div className="main-main-div">
            <SearchForm />
        </div>
    )
}

export default Main;
