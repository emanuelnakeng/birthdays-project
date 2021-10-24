import React from 'react';

const Person = props => {
	const { age, img, name, surname, onClick } = props;
	return (
		<article className='person'>
			<img src={img} alt={`${name} ${surname}`} />
			<div className='details'>
				<h3>{`${name} ${surname}`}</h3>
				<p>{age} years old</p>
				<span onClick={onClick}>🚽 Remove</span>
			</div>
		</article>
	);
};

export default Person;
