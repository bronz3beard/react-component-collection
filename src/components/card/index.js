import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';

/**
 * @render react
 * @name BasicCard
 * @description This is a basic card element to hold other elements and jsx elements and display in a grid it will displa the grid when it is mapped, otherwise it will just display one item in a card.
 * @example     {items.map((item) => (
                    <BasicCard>
                        <Element item={item} />
                    </BasicCard>
                    )
                )}
 * @example <BasicCard>
                {new Date().toLocaleDateString()}
            </BasicCard>
 */

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