import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Page = React.memo(({ children }) => (
  <main className={styles.page}>
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
