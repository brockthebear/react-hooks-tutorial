import React, { useRef } from 'react';
import useAbortableFetch from 'use-abortable-fetch';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const api = 'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes';
const title = 'Level Up Dishes';

const App = () => {
	const appRef = useRef();
	const [name, setName] = useTitleInput('');

	const { data, loading, error, abort } = useAbortableFetch(api);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!data) return null;

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

			{data.map(dish => (
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
