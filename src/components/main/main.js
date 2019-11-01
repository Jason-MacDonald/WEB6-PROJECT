import React from 'react';

import './main.css'
import ReduxSearchForm from '../search-form/redux-search-form';

// Returns the main front page component with SearchForm.
// Background is assigned in css.
const Main = () => {
    return (
        <div className="main-main-div">
            <ReduxSearchForm />
        </div>
    )
}

export default Main;
