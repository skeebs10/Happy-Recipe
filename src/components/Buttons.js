import React from 'react';
import '../scss/Components/Button.scss';

const Button = ({ title, className, onClick, type }, props) => {
	return (
		<button
			className={className ? className + ' Button' : 'Button'}
			onClick={onClick}
			type={type ? type : 'text'} ///checking if type is available; type is type
			{...props}
		>
			{title}
		</button>
	);
};
export default Button;
