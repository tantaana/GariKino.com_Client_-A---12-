import React from 'react';

const DashboardNav = ({ getUser }) => {
    const hello = getUser?.userType === "Admin" ? "chi" : "thappor";
    console.log(hello)

    return (
        <div>
            <h2>{getUser.userType}</h2>
        </div>
    );
};

export default DashboardNav;