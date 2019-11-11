import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import useWindowSize from './use-window-size'
import Loader from './loader'
import config from '../../config';

//import image from './image.png';
import styles from './photo.module.css'; 

const Photo = ({ onClick }) => {
   useWindowSize(); // We don't use the size, just for re-rendering
   const [initialSize, setInitialSize] = useState(null);
   const ref = useRef(null);

   const [data, setData] = useState({ indexes: [], image: null, base64: "" });
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const width = ref.current ? ref.current.offsetWidth : 0;
      const height = ref.current ? ref.current.offsetHeight : 0;
      setInitialSize({ width, height });

      const doRequest = async () => {
         setIsError(false);
         setIsLoading(true);
         try {
            const url = `${config.serverURL}/drawing`;
            const response = await axios(url);
            const { indexes, base64 } = response.data;
            const image = new Image();
            image.src = "data:image/png;base64," + base64;
            //setData({ indexes: [0, 4095], image, base64 });
            setData({ indexes, image, base64 });
         } catch (error) {
            setIsError(true);
         }
         setIsLoading(false);
      };
      doRequest();
   }, [ref]);

   const handleClick = ti => {
      //console.log('clicked', ti);
      if (!data.image) {
         return
      }
      const state = {
         index: ti,
         indexes: data.indexes,
         image: data.image
      };
      onClick(state);
   }

   if (isLoading) {
      return (
         <div className={styles.container}>
            <Loader />
         </div>
      );
   }
   if (isError) {
      return (
         <div className={styles.container}>
            An error occurred while loading the image. Please try again later.
         </div>
      );
   }
   // Since ref isn't ready after load we use initialSize() inside useEffect(),
   // But, on subsequent resizing we use ref size to maintain aspect ratio.
   const length = ref.current 
      ? Math.min(ref.current.offsetWidth, ref.current.offsetHeight) 
      : initialSize 
         ? Math.min(initialSize.width, initialSize.height) 
         : 0;
   //console.log(length, length);
   return (
      <div ref={ref} className={styles.container}>
         <div className={styles.content} style={{ width:`${length}px`, height:`${length}px` }}>
            {/* <img className={styles.image} src={image} alt="" /> */}
            <img
               src={`data:image/jpeg;base64,${data.base64}`} 
               alt="mosaic" />
            <div className={styles.grid}>
               {[...Array(4096).keys()].map(i => 
                  <div key={i} className={`_${i}`} onClick={e => handleClick(i)} />)
               }
            </div>
         </div>
         <p className={styles.description}>Click on a colored tile to preview the pixel art or on a white tile to start drawing.</p>
      </div>
   );
}

export default Photo;
