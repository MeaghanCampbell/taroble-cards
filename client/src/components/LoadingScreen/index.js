import React from 'react';
import logo from '../../assets/images/taroble-logo-02.svg';

const Loading = () => {
    return (
        <div>
            <div className="load-img-container">
                <img src={logo} alt="Taroble cards logo" />
            </div>
        </div>
    )
}

export default Loading
