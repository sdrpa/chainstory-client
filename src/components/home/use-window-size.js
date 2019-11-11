import { useState, useLayoutEffect } from 'react';

const useWindowSize = () => {
   const [size, setSize] = useState([0, 0]);
   useLayoutEffect(() => {
      const updateSize = () => {
         setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
   }, []);
   return size;
}

// const useWindowSize = () => {
//    const isClient = typeof window === 'object';
//    const [windowSize, setWindowSize] = useState({
//       width: isClient ? window.innerWidth : undefined,
//       height: isClient ? window.innerHeight : undefined
//    });
 
//    useEffect(() => {
//       const isClient = typeof window === 'object';
//       if (!isClient) {
//          return false;
//       }
      
//       function handleResize() {
//          setWindowSize({
//             width: isClient ? window.innerWidth : undefined,
//             height: isClient ? window.innerHeight : undefined
//          });
//       }

//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//    }, []); // Empty array ensures that effect is only run on mount and unmount
 
//    return windowSize;
// }

export default useWindowSize;
