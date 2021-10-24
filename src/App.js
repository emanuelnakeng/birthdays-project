import React, { useState } from 'react';
import Person from './components/Person';
import Button from './components/UI/Button';
import Card from './components/UI/Card';
import { data } from './data';

const App = () => {
	const [people, setPeople] = useState(data);

	const removeHandler = id => {
		const newPeople = people.filter(person => person.id !== id);
		setPeople(newPeople);
	};

	return (
		<div className='bg'>
			<Card className='people'>
				<h2>{people.length} Birthdays today</h2>
				{people.map(person => {
					// console.log(person);
					const { age, img, name, surname, id } = person;
					return (
						<Person
							age={age}
							img={img}
							name={name}
							surname={surname}
							key={id}
							onClick={() => removeHandler(id)}
						/>
					);
				})}
				<Button className='btn' onClick={() => setPeople([])}>
					Clear all
				</Button>
			</Card>
		</div>
	);
};

export default App;
