import React, { useRef } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
	const [name, setName] = useTitleInput('');
	const appRef = useRef();

	return (
		<div className='main-wrapper' ref={appRef}>
			<h1
				onClick={() => {
					appRef.current.classList.add('new-fake-class');
				}}
			>
				Level Up Dishes
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
		</div>
	);
};

export default App;
