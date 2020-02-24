import React, { useRef } from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';
import { useOnClickOutside } from './hooks/useOnClickOutside';

const DishForm = ({ setToggle }) => {
	// Use ref to create a reference to a DOM element and pass it in to the hook.
	// In this case, we are referencing the DishForm component and passing it to the useOnClickOutside hook.
	const ref = useRef();

	useBodyScrollLock();

	// By calling `setToggle(false)` inside the useOnClickOutside hook like this,
	// we are coercing the hooks' toggle state to be Boolean.
	// If we just use `useOnClickOutside(ref, setToggle)`,
	// the hooks' toggle state will be true or undefined (falsy, but not Boolean).
	useOnClickOutside(ref, () => setToggle(false));

	return (
		<div className='dish-card' ref={ref}>
			<form>
				<div className='form-row'>
					<label htmlFor='name'>
						<input type='text' id='name' />
					</label>
				</div>
			</form>
		</div>
	);
};

export default DishForm;
