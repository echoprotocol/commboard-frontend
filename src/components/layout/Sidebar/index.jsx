import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Sidebar = ({ children }) => (
  <div className={styles.sidebar}>
    {children}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node,
};

Sidebar.defaultProps = {
  children: null,
};

export default memo(Sidebar);
