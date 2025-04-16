import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            
        </div>
    );
};

export default HomeLayout;