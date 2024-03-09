import React from 'react';
import Nav from '../Nav/Nav';
import Banner from './banner/Banner';

const Header = () => {
    return (
       <div>
         <div className='grid grid-cols-2'>
            <div>Logo</div>
            <div>
                <Nav></Nav>
            </div>
        </div>
        <div>
            <Banner></Banner>
        </div>
       </div>
    );
};

export default Header;