import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Colors, rgba } from './colors'
import ColorPicker from './color-picker'
import Canvas from './canvas';
import { Matrix } from './colors'
import Sheet from '../sheet/sheet'

import styles from './drawing.module.css';
import './colors.css'; // Shared
import Button from './button';

const EMPTY_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAH0lEQVQ4T2NkoBAwUqifYdQAhtEwYBgNA1A+Gvi8AAAmmAARf9qcXAAAAABJRU5ErkJggg==';

const Drawing = () => {
   let { ti } = useParams();
   const [matrix, setMatrix] = useState(Matrix())
   const [currColor, setCurrColor] = useState('red')
   const [showSheet, setShowSheet] = useState(false);

   const setColor = (rowIndex, colIndex, color) => {
      const m = JSON.parse(JSON.stringify(matrix));
      const oldColor = m[rowIndex][colIndex];
      if (oldColor !== color) {
         m[rowIndex][colIndex] = color;
         setMatrix(m);
      }
   };

   const reset = () => {
      setMatrix(Matrix())
   }

   const toggleSheet = () => {
      setShowSheet(prevState => !prevState);
   }

   const encodedDataURL = matrix => {
      // array: [[255, 255, 255, 255], [255, 255, 255, 255], ...], length 256
      const array = matrix.flatMap(c => c).map(c => rgba(c)) 
      var canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      var i = 0;
      for (var x = 0; x < 16; x++) {
         for (var y = 0; y < 16; y++) {
            const idx = (x + y * imageData.width) * 4;
            imageData.data[idx+0] = array[i][0]; // r
            imageData.data[idx+1] = array[i][1]; // g
            imageData.data[idx+2] = array[i][2]; // b
            imageData.data[idx+3] = array[i][3]; // a
            i++;
         }
      }
      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
   }

   const dataURL = encodedDataURL(matrix);
   //console.log(dataURL);
   const drawing = {
      version: 1,
      index: parseInt(ti),
      data: dataURL
   }

   return (
      <div className={styles.container}>
         <div className={styles.drawing}>
            <ColorPicker colors={Colors.slice(0, 13)} currColor={currColor} setColor={c => setCurrColor(c)} />
            <Canvas matrix={matrix} currColor={currColor} setColor={setColor} />
            <ColorPicker colors={Colors.slice(13, 26)} currColor={currColor} setColor={c => setCurrColor(c)} />
         </div>
         <p className={styles.description}>Select a color then click or drag to paint. Double-click to erase.</p>
         <div className={styles.buttons}>
            <Button type="danger"
               text="Clear All"
               disabled={dataURL === EMPTY_DATA_URL}
               onClick={reset} />
            <Button type="primary" 
               text="Submit" 
               disabled={dataURL === EMPTY_DATA_URL}
               onClick={toggleSheet}/>
         </div>
         <Sheet isShown={showSheet} drawing={drawing} onDismiss={toggleSheet} />
      </div>
   );
}

export default Drawing;
