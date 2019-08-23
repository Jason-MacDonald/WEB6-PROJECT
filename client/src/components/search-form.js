import React from 'react';

import './search-form.css'

class SearchForm extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className='search-form-main-div'>
                <form>
                    <h2>Find a Car</h2>
                    <input type='text' placeholder='Keywords...'/>
                    {/* Add selects from other file */}
                    <select>
                        <option>Any Make</option>
                        <option>Make 1</option>
                        <option>Make 2</option>
                        <option>Make 3</option>
                    </select>
                    <select>
                        <option>Any Model</option>
                        <option>Make 1</option>
                        <option>Make 2</option>
                        <option>Make 3</option>
                    </select>
                    <select>
                        <option>Any Body Style</option>
                        <option>Make 1</option>
                        <option>Make 2</option>
                        <option>Make 3</option>
                    </select>
                    <select>
                        <option>Any Model</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                    </select>
                    <select>
                        <option>Any Price</option>
                        <option>1k</option>
                        <option>2k</option>
                    </select>

                    <p>to</p>

                    <select>
                        <option>Any Price</option>
                        <option>1k</option>
                        <option>2k</option>
                    </select>

                    <select>
                        <option>Any Year</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>

                    <p>to</p>
                    
                    <select>
                        <option>Any Year</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>
                    <input type="submit" value="Find Car"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;
