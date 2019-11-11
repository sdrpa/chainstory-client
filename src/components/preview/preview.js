import React, { useState, useEffect } from 'react';
import Canvas from './canvas'
import { colorName, Matrix } from '../drawing/colors'
import config from '../../config';

import styles from './preview.module.css';

/**
 * @param {int}      initialIndex Initial tile index
 * @param {array}    indexes      Array of available tile indexes
 * @param {Object}   image        Image
 * @param {function} onClose
 */
const Preview = ({ initialIndex, indexes, image, onClose }) => {
   const [matrix, setMatrix] = useState(Matrix());
   const [index, setIndex] = useState(initialIndex);

   useEffect(() => {
      setMatrix(tileMatrix(index, image))
   }, [index, image]);

   /**
    * Color matrix for a tile index
    * @param {int}    ti    Tile index
    * @param {Object} image Image
    * 
    * @returns color matrix for a tile index
    */
   const tileMatrix = (ti, image) => {
      var canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      // Draw image onto the canvas
      canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);

      const { tnum } = config.image // number of tiles
      const tsize = image.width / tnum; // tile size
      // Calculate top left corner of the tile index
      const x = ti % tnum * tsize;
      const y = Math.floor(ti / tnum) * tsize;
      // (x, y) are top left coords of tile index (ti)
      //console.log(ti, `(${x}, ${y})`)
      var matrix = [];
      for (var i = x; i < x + tsize; i++) {
         var ys = [];
         for (var j = y; j < y + tsize; j++) {
            //console.log(i, j)
            const rgba = canvas.getContext('2d').getImageData(i, j, 1, 1).data; 
            // rgba format: ['0':255, '1':255, '2':255, '3':255], extract values
            const keys = Object.keys(rgba);
            const values = keys.map(v => rgba[v]);
            ys.push(colorName(values))
         }
         matrix.push(ys)
      }
      return matrix;
   }

   const handlePrevious = e => {
      e.stopPropagation();
      const curr = indexes.indexOf(index);
      const prev = (curr - 1) >= 0
         ? curr - 1
         : curr;
      setIndex(indexes[prev]);
   }

   const handleNext = e => {
      e.stopPropagation();
      const curr = indexes.indexOf(index);
      const next = (curr + 1) < indexes.length
         ? curr + 1
         : curr;
      setIndex(indexes[next]);
   }

   //console.log("Preview ti:", index);
   return (
      <div className={styles.overlay} onClick={onClose}>
         <div className={`${styles.previous} ${styles.noselect}`} onClick={e => handlePrevious(e)}>❮</div>
         <Canvas index={index} matrix={matrix} />
         <div className={`${styles.next} ${styles.noselect}`} onClick={e => handleNext(e)}>❯</div>
      </div>
   )
}

export default Preview;
