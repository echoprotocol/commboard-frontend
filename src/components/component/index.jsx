import React from 'react';
import styles from './style.module.scss';
import image from './logo.svg';

const Component = () => (
  <>
    <div className={styles.component}>Component</div>
    <img src={image} alt="" />
  </>
);

export default Component;
