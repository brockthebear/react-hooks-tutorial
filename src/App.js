import React, { useRef, useMemo } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
	const [name, setName] = useTitleInput('');
	const appRef = useRef();
	const title = 'Level Up Dishes';

	const reverseWord = word => {
		console.log(`reverse ${word === title ? 'title' : 'word'}`);
		return word
			.split('')
			.reverse()
			.join('');
	};

	// useMemo caches the `title` value and checks its value.
	// if it has not changed, the `reverseWord()` function is not run.
	//
	// useMemo is best used when you have expensive functions that you only want to run under specific circumstances.
	// very similar to shouldComponentUpdate().
	useMemo(() => reverseWord(name), [name]);
	const TitleReversed = useMemo(() => reverseWord(title), [title]);

	return (
		<div className='main-wrapper' ref={appRef}>
			<h1
				onClick={() => {
					appRef.current.classList.add('new-fake-class');
				}}
			>
				{TitleReversed}
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
