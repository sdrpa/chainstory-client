import React, { useState, useCallback, useEffect, useRef } from 'react';

import styles from './canvas.module.css';

const Pixel = ({ background, onClick, onDoubleClick }) => {
   return (
      <div
         className={`${background} ${styles.pixel}`}
         onClick={onClick}
         onDoubleClick={onDoubleClick} />
   );
}

const Canvas = ({ matrix, currColor, setColor }) => {
   const ref = useRef(null);
   const [dragging, setDragging] = useState(false);

   const onDrag = useCallback(({x, y}) => {
      if (!ref) {
         return;
      }
      const tsize = ref.current.clientWidth / 16; // tile size
      const col = Math.floor(x / tsize);
      const row = Math.floor(y / tsize);
      if ((col >= 0 && col < 16) && (row >= 0 && row < 16)) {
         setColor(col, row, currColor);
      }
   }, [currColor, setColor]);
   
   const handleMouseUp = useCallback(() => {
      window.removeEventListener('mouseup', handleMouseUp);
      setDragging(false);
   }, []);

   const handleMouseDown = useCallback(() => {
      window.addEventListener('mouseup', handleMouseUp);
      setDragging(true);
   }, [handleMouseUp]);
     
   const handleMouseMove = useCallback(e => {
      if (!dragging) {
         return;
      }
      onDrag({x: e.pageX - ref.current.offsetLeft, y: e.pageY - ref.current.offsetTop});
   }, [dragging, onDrag]);
     
   useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, [handleMouseMove]);

   return (
      <div ref={ref}
         className={`${styles.canvas} ${styles.noselect}`}
         onMouseDown={handleMouseDown}>
         {matrix.map((col, colIndex) =>
            col.map((_, rowIndex) => {
               return (
                  <Pixel key={`${rowIndex}-${colIndex}`}
                     background={matrix[rowIndex][colIndex]}
                     onClick={e => setColor(rowIndex, colIndex, currColor)} 
                     onDoubleClick={e => setColor(rowIndex, colIndex, 'transparent')} />
               );
            })
         )}
      </div>
   );
};

export default Canvas;
