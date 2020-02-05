import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

const Header = (props) => {
  const { children } = props;

  return (
    <div className={styles.header}>
      {children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
