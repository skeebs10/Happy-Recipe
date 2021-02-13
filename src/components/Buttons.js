import React from 'react';
import '../scss/Components/Button.scss';

const Button = ({ title, className, onClick, type }, props) => {
    return (
        <button
            className={className ? 'Button ' + className : 'Button'}
            onClick={onClick}
            type={type ? type : 'text'}
            {...props}
        >
            {title}
        </button>
    );
};
export default Button;
