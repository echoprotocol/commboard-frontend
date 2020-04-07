import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = React.memo(({ children }) => (
  <div>
    {children}
  </div>
));

Sidebar.propTypes = {
  children: PropTypes.node,
};

Sidebar.defaultProps = {
  children: null,
};

export default Sidebar;
