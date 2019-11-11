import React, { useState } from 'react';
import axios from 'axios';
import Input from './input';
import SheetSuccess from './sheet-success';
import config from '../../config'

import styles from './sheet.module.css'; 

const Sheet = ({ isShown, drawing, onDismiss }) => {
   const [message, setMessage] = useState('');
   const [data, setData] = useState(null); // Response data
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

   const submit = e => {
      const doRequest = async () => {
         setIsError(false);
         setIsLoading(true);
         try {
            const requestUrl = `${config.serverURL}/add`;
            const requestData = { ...drawing, message }
            const res = await axios.post(requestUrl, requestData);
            setData(res.data);
         } catch (error) {
            setIsError(true);
         }
         setIsLoading(false);
      };
      doRequest();
   };

   if (!isShown) {
      return null;
   }
   if (data) {
      return (
         <SheetSuccess isLoading={isLoading} 
            address={data.recipient} 
            fileHash={data.file}
            onCancel={e => {
               setData(null);
               onDismiss();
            }} 
            onDismiss={onDismiss} />
      );
   }
   return (
      <div className={styles.overlay}>
         <div className={styles.body}>
            <h3 className={styles.title}>Submit work</h3>
            <p>Attach a message or URL to your drawing</p>
            <Input value={message}
               onChange={e => setMessage(e.currentTarget.value)} />
            {isError && <p className={styles.error}>An error occurred while sending the drawing. Please try again later. </p>}
            <div className={styles.buttonGroup}>
               <button className={`${styles.button} ${styles.danger}`}
                  disabled={isLoading}
                  onClick={onDismiss}>
                  Cancel
               </button>
               <button className={`${styles.button} ${styles.primary}`}
                  disabled={isLoading}
                  onClick={e => submit(e)}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   )
}

export default Sheet;
