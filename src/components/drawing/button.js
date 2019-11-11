import React from 'react';

import styles from './button.module.css';

const Button = ({ text, type, disabled, onClick }) => {
   const background = type => {
      switch (type) {
         case 'primary': return styles.primary
         default: return styles.danger
      }
   }
   return (
      <button className={`${styles.button} ${background(type)}`}
         disabled={disabled}
         onClick={onClick}>
         {text}
      </button>
   );
}

export default Button;