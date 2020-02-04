import React from 'react';
import PropTypes from 'prop-types';
import './footer.module.scss';

/**
 * @render react
 * @name Footer
 * @description This is a basic footer which can contain any type of children
 * @example <Footer>
                <p>
                    All weather data for this site is provided by
                    {' '}
                    <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeather</a>.
                </p>
            </Footer>
 */

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