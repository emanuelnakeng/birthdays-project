import React from 'react';

const Button = props => {
	const { children, type, onClick, className } = props;
	return (
		<button
			className={`btn ${className}`}
			type={type || 'button'}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
