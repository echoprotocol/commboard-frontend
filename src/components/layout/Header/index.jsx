import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import styles from './styles.module.scss';
import logo from '../../../../public/next/images/logo.svg';


const Avatar = dynamic(() => import('../../Avatar'), { ssr: false });

const Header = React.memo(({ name }) => (
  <header className={styles.header}>
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.user}>
        <span className={styles.userName}>
          {name}
        </span>
        <Avatar accountName="userName" />
        {/* <img src={userIcon} className={styles.userIcon} alt="user" /> */}
      </div>
    </div>
  </header>
));

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: 'username',
};

export default connect((state) => ({
  name: state.user.get('name'),
}), null)(Header);
