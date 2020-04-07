import React from 'react';
import styles from './style.module.scss';

const Footer = React.memo(() => (
  <footer className={styles.footer}>
    <span className="text">© Echo, All rights reserved</span>
  </footer>
));

export default Footer;
