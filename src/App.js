import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const api = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
const title = 'Level Up Dishes';

const App = () => {
	const [name, setName] = useTitleInput('');
	const appRef = useRef();
	const [dishes, setDishes] = useState([]);

	const fetchDishes = async () => {
		console.log(`fetched dishes!`);
		const res = await fetch(api);
		const data = await res.json();
		setDishes(data);
	};

	/**
	 * * Set 2nd param as empty array to run useEffect only once on mount.
	 * * Like this, useEffect() basically becomes a `componentDidMount()`
	 */
	useEffect(() => {
		fetchDishes();
	}, []);

	return (
		<div className='main-wrapper' ref={appRef}>
			<h1
				onClick={() => {
					appRef.current.classList.add('new-fake-class');
				}}
			>
				{title}
			</h1>
			<Toggle />
			<form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<input type='text' onChange={e => setName(e.target.value)} value={name} />
				<button>Submit</button>
			</form>

			{dishes.map(dish => (
				<article className='dish-card dish-card--withImage'>
					<h3>{dish.name}</h3>
					<p>{dish.desc}</p>
					<div className='ingredients'>
						{dish.ingredients.map(ingredient => (
							<span>{ingredient}</span>
						))}
					</div>
				</article>
			))}
		</div>
	);
};

export default App;
