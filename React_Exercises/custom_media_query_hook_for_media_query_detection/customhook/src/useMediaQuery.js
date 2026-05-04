import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  // Initialize the state with the current match status
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    console.log("media==",media)
    
    // Set the initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define a callback function to handle changes
    const listener = () => setMatches(media.matches);

    // Modern browsers use addEventListener; older ones use addListener
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      media.addListener(listener);
    }

    // Clean up the listener on unmount
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]); // Re-run if the query string changes

  return matches;
}

export default useMediaQuery;