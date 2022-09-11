import React from 'react';
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Message from '../components/Message'
import Friends from './Friends';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Friends />
        </div>
    );
};

export default Sidebar;