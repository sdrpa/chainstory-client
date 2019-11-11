import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config'

import styles from './metadata.module.css';

const Metadata = ({ index }) => {
   const [data, setData] = useState({ index: -1, message: "" });
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   useEffect(() => {
      const doRequest = async () => {
         setIsError(false);
         setIsLoading(true);
         try {
            const url = `${config.serverURL}/drawing/${index}`;
            const res = await axios(url);
            setData(res.data);
         } catch (error) {
            setIsError(true);
         }
         setIsLoading(false);
      };
      doRequest();
   }, [index]);

   if (isLoading) {
      return <div className={styles.container}>Loading metadata...</div>
   }
   if (isError) {
      return <div className={styles.container}>An error occurred while loading art metadata</div>
   }

   return (
      <div className={styles.container}>
         <a className={`${styles.a} ${data.amount >= config.donationLowerBound ? styles.donation : ""}`}
            target="_blank" 
            rel="noopener noreferrer"
            href={data.message}
            onClick={e => e.stopPropagation()}>{data.message}</a>
      </div>
   );
};

export default Metadata;