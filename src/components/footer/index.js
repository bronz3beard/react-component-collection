import React from 'react';
import PropTypes from 'prop-types';
import './footer.module.scss';

const Footer = (props) => {
  const { children } = props;

  return <footer>{children}</footer>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
