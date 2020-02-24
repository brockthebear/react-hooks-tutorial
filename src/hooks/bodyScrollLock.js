import { useLayoutEffect } from 'react';

/**
 * Prevent scrolling when the useLayoutEffect hook is in effect.
 * * https://usehooks.com/useLockBodyScroll/
 */
function useBodyScrollLock() {
	useLayoutEffect(() => {
		// get original value of document.body.style.overflow
		const originalOverflow = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';

		/**
		 * * return function cleanup()
		 * Function to be run when component is unmounted.abs
		 * When the effects of the Hook go away,
		 * the cleanup function is how you remove/undo those effects.
		 * Basically a `componentWillUnmount()`.
		 */
		return () => {
			// return document.body.style.overflow to its original value.
			document.body.style.overflow = originalOverflow;
		};
	}, []);
}

export { useBodyScrollLock };
