import React from 'react';

//import styles from './input.module.css';
import styles from './input.module.css';

const Input = ({ value, onChange }) => {
   return (
      <div className={styles.container}>
         <input 
            id="url" 
            type="text" 
            className={`${styles.input} ${styles.input1}`} 
            placeholder="Text" 
            onChange={onChange} />
         <label htmlFor="url" className={styles.label}>URL</label>
      </div>
   );
}

export default Input;