import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
	useEffect(() => {
		const listener = e => {
			// Return if the click occurs *inside* of the current ref element.
			if (!ref.current || ref.current.contains(e.target)) {
				return;
			}
			// Run handler function if click occurs outside of div.
			// In this case, we are toggling the DishForm component
			handler();
		};

		// Attach event listener when component is mounted.
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		// Remove event listeners when component is unmounted.
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, []);
}

export { useOnClickOutside };
