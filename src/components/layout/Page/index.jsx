import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Page = ({ children }) => (
  <main className={styles.page}>
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default memo(Page);
