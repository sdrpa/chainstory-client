import React from 'react'

import styles from './color-picker.module.css';

const Color = ({ background, hasCrossMark, selected, onClick }) => {
   return (
      <div
         className={`${background} ${styles.color} ${selected ? styles.selected : ''}`}
         onClick={onClick}>
      {hasCrossMark 
         ? <span className={styles.crossMark} role="img" aria-label="transparent">&#10060;</span> 
         : null
      }
      </div>
   );
}

const ColorPicker = ({ colors, currColor, firstHasCrossMark = false, setColor }) => {
   return (
      <div className={styles.colorPicker}>
         {colors.map((color, index) => {
            return (
               <Color
                  key={index}
                  background={color}
                  hasCrossMark={index === 0 && firstHasCrossMark}
                  selected={currColor === color}
                  onClick={e => setColor(color)} />
            )
         })}
      </div>
   )
}

export default ColorPicker;
