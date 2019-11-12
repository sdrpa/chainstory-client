import React from 'react';

import styles from './about.module.css';

function About() {
   const IPFS = <a className={styles.a1} target="_blank" rel="noopener noreferrer" href="https://ipfs.io/">IPFS</a>
   const LISK = <a className={styles.a1} target="_blank" rel="noopener noreferrer" href="https://lisk.io/">Lisk</a>

   return (
      <div className={styles.about}>
         <div className={styles.block}>
            <h4>chain story <em>n.</em> (plural chain stories)</h4>
            <p>A story, each section of which is written by a different author picking up where the previous one left off. - <a className={styles.a} target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/chain_story">wiktionary</a></p>
         </div>

         <div className={styles.block}>
            <h3>What is Chain Story app?</h3>
            <p>Chain Story is a web application which leverages {IPFS} and {LISK} blockchain to permanently link a pixel art to an author's blockchain address. By using decentralized and distributed technology a permanent link is created ensuring the authenticity of the submitted work.
            </p>
         </div>

         <div className={styles.block}>
            <h3>How it works?</h3>
            <p>Once submitted, a drawing is saved to IPFS, generating a unique content identifier the author can register (by sending transaction) on Lisk blockchain. Chain Story application continually reads blockchain and IPFS data displaying the original pixel art.
            </p>
            <p>Chain Story's client is a React app. The backend interacting with IPFS and Lisk API is written in Golang.</p>
         </div>

         <div className={styles.block}>
            <h3>Source code</h3>
            <p>Both the client and server source code are available at: <a className={styles.a} target="_blank" rel="noopener noreferrer" href="https://github.com/sdrpa/chainstory-client">https://github.com/sdrpa/chainstory-client</a>, <a className={styles.a} target="_blank" rel="noopener noreferrer" href="https://github.com/sdrpa/chainstory-server">https://github.com/sdrpa/chainstory-server</a></p>
         </div>

         <div className={styles.block}>
            <h3>License</h3>
            <p>Licensed under the <a className={styles.a} target="_blank" rel="noopener noreferrer" href="http://www.apache.org/licenses/LICENSE-2.0">Apache License</a></p>
         </div>
      </div>
  );
}

export default About;
