import React from 'react';

import styles from './sheet.module.css'; 

const SheetSuccess = ({isLoading, address, fileHash, onCancel, onDismiss}) => {
   //const liskHub = <a className={styles.a} target="_blank" rel="noopener noreferrer" href="https://lisk.io/hub">LiskHub</a>

   return (
      <div className={styles.overlay}>
         <div className={styles.body}>
            <h3 className={styles.title}>Your work has been submitted to distributed file system and needs to be registered on blockchain.</h3>
            <div className={styles.article} style={{ marginBottom: '1em' }}>
               <p>To register your work on blockchain, send <b>1 LSK</b> (or more if you want to donate to Chain Story project) to <span className={styles.code}>{address}</span> and paste <span className={styles.code}>{fileHash}</span> to transaction's message field to identify your work.</p>
            </div>
            <p><a className={styles.a1} target="_blank" rel="noopener noreferrer" href="https://chainstory.art/liskhub.png">Show me how to do it with LiskHub</a></p>
            <p><i>Once the transaction is registered on blockchain, your art will appear on Chain Story's front page.</i>
            </p>

            <div className={styles.buttonGroup}>
               <button className={`${styles.button} ${styles.danger}`}
                  disabled={isLoading}
                  onClick={onCancel}>
                  Cancel
               </button>
               <button className={`${styles.button} ${styles.primary}`}
                  disabled={isLoading}
                  onClick={onDismiss}>
                  Ok
               </button>
            </div>
         </div>
      </div>
   );
}

export default SheetSuccess;
