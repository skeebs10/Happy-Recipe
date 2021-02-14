import React from 'react';
import '../scss/Components/Button.scss';

const Button = ({ title, className, onClick, type }, props) => {
    return (
        <button
            className={className ? 'Button ' + className : 'Button'}
            onClick={onClick}
            //types of buttons - if type is given then type is type
            type={type ? type : 'text'}
            //pull props from line 4
            {...props}
        >
            {title}
        </button>
    );
};
export default Button;
