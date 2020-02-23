import React, { useRef, createContext } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
	const [name, setName] = useTitleInput('');
	const appRef = useRef();

	return (
		<UserContext.Provider
			value={{
				user: false,
			}}
		>
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
		</UserContext.Provider>
	);
};

export default App;
