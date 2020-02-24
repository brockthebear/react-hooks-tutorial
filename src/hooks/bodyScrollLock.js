import { useLayoutEffect } from 'react';

/**
 * Prevent scrolling when the useLayoutEffect hook is in effect.
 * * https://usehooks.com/useLockBodyScroll/
 */
function useBodyScrollLock() {
	useLayoutEffect(() => {
		document.body.style.overflow = 'hidden';
	});
}

export { useBodyScrollLock };
