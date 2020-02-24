import React from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';

const DishForm = () => {
	useBodyScrollLock();
	return (
		<div className='dish-card'>
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
