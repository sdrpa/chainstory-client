import React from 'react'

import styles from './color-picker.module.css';

const Color = ({ background, selected, onClick }) => {
   return (
      <div
         className={`${background} ${styles.color} ${selected ? styles.selected : ''}`}
         onClick={onClick} />
   );
}

const ColorPicker = ({ colors, currColor, setColor }) => {
   return (
      <div className={styles.colorPicker}>
         {colors.map((color, index) => {
            return (
               <Color
                  key={index}
                  background={color}
                  selected={currColor === color}
                  onClick={e => setColor(color)} />
            )
         })}
      </div>
   )
}

export default ColorPicker;
