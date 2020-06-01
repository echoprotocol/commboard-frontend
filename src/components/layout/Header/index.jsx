import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import styles from './styles.module.scss';
import logo from '../../../../public/next/images/logo.svg';


const Avatar = dynamic(() => import('../../Avatar'), { ssr: false });

const Header = ({ name }) => (
  <header className={styles.header}>
    <div className={styles.wrap}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.user}>
        <span className={styles.userName}>
          {name}
        </span>
        <Avatar accountName={name} />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string,
};

Header.defaultProps = {
  name: '',
};

export default connect((state) => ({
  name: state.user.get('name'),
}), null)(memo(Header));
