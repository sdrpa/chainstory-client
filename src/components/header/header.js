import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config'

import logo from './logo.png'
import styles from './header.module.css';

function Header() {
   const [nodeURL, setNodeURL] = useState("");

   useEffect(() => {
      const doRequest = async () => {
         try {
            const url = `${config.serverURL}/node`;
            const response = await axios(url);
            const nodeURL = response.data
            setNodeURL(nodeURL);
         } catch (error) {}
      };
      doRequest();
   }, []);

   const renderNodeURL = () => {
      return (nodeURL === 'https://testnet.lisk.io')
         ? <span className={styles.network}>{nodeURL}</span>
         : null
   }

   return (
      <header>
         <div className={styles.title}>
            <Link to="/" className={`${styles.a}`}>
               <img src={logo} alt="logo" />Chain Story{renderNodeURL()}
            </Link>
            <div className={styles.subtitle}>The place where pixel art meets blockchain</div>
         </div>
         <div>
            <Link to="/about" className={styles.a}>about</Link>
         </div>
      </header>
  );
}

export default Header;
