import React from 'react';

import styles from './pixel.module.css'; 

const Pixel = ({ background }) => {
   return (
      <div className={`${background} ${styles.pixel}`} />
   );
}

export default Pixel;
