import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.scss';

/**
 * @render react
 * @name FHeader
 * @description This is a simple header element which can contain any type of children
 * @example <Header>This is a simple header</Header> 
 */

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