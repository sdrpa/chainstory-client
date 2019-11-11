import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Photo from './photo';
import Preview from '../preview/preview'

import styles from './home.module.css'; 

const DEST_HOME    = 'DEST_HOME';
const DEST_PREVIEW = 'DEST_PREVIEW';
const DEST_EDITOR  = 'DEST_EDITOR';

const Home = () => {
   const [state, setState] = useState({ dest: DEST_HOME });

   const handlePhotoClick = state => {
      const { index, indexes } = state;
      const dest = (indexes == null ? [] : indexes).includes(index) ? DEST_PREVIEW : DEST_EDITOR;
      setState({ ...state, dest });
   }

   const handlePreviewClose = e => {
      e.stopPropagation();
      setState({ dest: DEST_HOME });
   };

   //console.log('render');
   const render = () => {
      const { index, indexes, image } = state;
      return (
         <div className={styles.container}>
            <Photo onClick={handlePhotoClick} />
            {state.dest === DEST_PREVIEW
               ? <Preview initialIndex={index}
                  indexes={indexes} 
                  image={image} 
                  onClose={e => handlePreviewClose(e)} />
               : null
            }
         </div>
      );
   };

   const redirect = () => {
      return <Redirect to={`/drawing/${state.index}`} />;
   };

   // Home can: show home, show preview over photo or redirect to editor. 
   // First two cases are basically the same (both show photo)
   return state.dest === DEST_EDITOR
      ? redirect()    
      : render();
}

export default Home;
