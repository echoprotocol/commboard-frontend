import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Dashboard = React.memo(({ children }) => (
  <div className={styles.dashboard}>
    {children}
  </div>
));

Dashboard.propTypes = {
  children: PropTypes.node,
};

Dashboard.defaultProps = {
  children: null,
};

export default Dashboard;
