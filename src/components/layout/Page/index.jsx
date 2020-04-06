import React from 'react';
import PropTypes from 'prop-types';

const Page = React.memo(({ children }) => (
  <main>
    {children}
  </main>
));

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
