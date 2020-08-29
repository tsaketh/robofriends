import React from 'react';
import SearchBar from './SearchBar';

const Header = (props)=> {
    return (
        <div>
            <h1 className='f1 myFont'>RoboFriends</h1>
            <SearchBar searchChange = { props.searchChange }/>
        </div>
    )
}

export default Header;