import React from 'react';
import error from '../../../images/error.png';

const NotFound = () => {
    return (
        <div>
            <img style={{height:"100vh", width:"100%"}} src={error} alt="" />
        </div>
    );
};

export default NotFound;