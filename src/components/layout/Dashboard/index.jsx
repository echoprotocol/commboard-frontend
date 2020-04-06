import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = React.memo(({ children }) => (
  <div>
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
