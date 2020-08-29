import React from 'react';
import Card from './Card';

const CardArray = ({robots}) => {
    const CardList = robots.map(({id, name, email}) => {
        return <Card id={ id} username = { name } email = { email }/>
    });
    if (CardList.length<=0) {
        return (
            <div style={{paddingTop: '30vh'}}>
                <h3 className='f2 myFont'>No Results Found</h3>
            </div>
        );
    }
    else {
        return (
            <div className='tc'>
                {CardList}
            </div>
        );
    }
    
}

export default CardArray;