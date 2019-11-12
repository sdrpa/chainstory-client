import React from 'react';
import Canvas from '../preview/canvas' // Be careful, must use preview canvas instead of ./canvas

import styles from '../preview/preview.module.css';

/**
 * @param {array} 2d matrix
 * @param {function} onClose
 */
const Preview = ({ matrix, onClose }) => {
   return (
      <div className={styles.overlay} style={{ background: 'rgba(0, 0, 0, 0.95)' }} onClick={onClose}>
         <div />
         <Canvas matrix={matrix} />
         <div />
      </div>
   )
}

export default Preview;
