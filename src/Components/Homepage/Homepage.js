import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserData from '../UserData/UserData';
import Users from '../Users/Users';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            {/* <Users /> */}
            <UserData />
        </div>
    );
};

export default Homepage;