import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

const App = () => {
	const [name, setName] = useTitleInput('');

	return (
		<div className='main-wrapper'>
			<h1>Level Up Dishes</h1>
			<Toggle />
			<form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<input type='text' onChange={e => setName(e.target.value)} value={name} />
				<button>Submit</button>
			</form>
		</div>
	);
};

// Custom Hook
function useTitleInput(initialValue) {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		document.title = value;
	});

	return [value, setValue];
}

export default App;
