import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Header = React.memo(({ userName = 'username' }) => (
  <header className={styles.header}>
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <img src="/next/images/logo.svg" alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.infoName}>
          {userName}
        </span>
        <span className={styles.infoIcon}>Icon</span>
      </div>
    </div>
  </header>
));

Header.propTypes = {
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: 'username',
};

export default Header;
