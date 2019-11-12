import React from 'react';
import Pixel from './pixel';
import Metadata from './metadata'

import styles from './canvas.module.css';

const Canvas = ({ index, matrix }) => {
   return (
      <div className={styles.container}>
         <div className={styles.canvas}
            onClick={e => e.stopPropagation()}>
            {matrix.map((col, colIndex) =>
               col.map((_, rowIndex) => {
                  return (
                     <Pixel key={`${rowIndex}-${colIndex}`}
                        background={matrix[rowIndex][colIndex]} />
                  );
               })
            )}
         </div>
         {index 
            ? <Metadata index={index} />
            : null
         }
      </div>
   );
};

export default Canvas;
