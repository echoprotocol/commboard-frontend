import React, { memo } from 'react';
import styles from './style.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <span className="text">© Echo, All rights reserved</span>
  </footer>
);

export default memo(Footer);
