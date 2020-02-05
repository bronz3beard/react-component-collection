import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

const BasicCard = (props) => {
    const { children } = props;
    return (
        <div className={styles.cardGrid}>
            <div className={styles.card}>
                {children}
            </div>
        </div>

    )
}

BasicCard.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.element, PropTypes.number, PropTypes.instanceOf(Date)]),
};

BasicCard.defaultProps = {
    children: null,
};

export default BasicCard;
