import React from 'react';
import PropTypes from 'prop-types';
import styles from './picture.module.scss';

const Picture = (props) => {
    const { image, images, imageAlt, imageId, className } = props;

    return (
        <div className={!className ? styles.row : className}>
            {images
                && images.map((image, index) => {
                    const objValue = Object.values(image);

                    if (!objValue || !objValue[0] || !objValue[1]) {
                        return null;
                    }
                    const imageAlt = objValue && objValue[0].indexOf('https://') > -1
                        ? objValue[1] : objValue[0];
                    const imageUrl = objValue && objValue[0].indexOf('https://') > -1
                        ? objValue[0] : objValue[1];

                    return (
                        <div className={styles.column} key={!imageId ? index : imageId}>
                            <div className={styles.imageContainer}>
                                <img
                                    id={!imageId ? index : imageId}
                                    draggable="false"
                                    src={imageUrl}
                                    alt={imageAlt}
                                    onMouseDown={event => event.preventDefault()}
                                />
                            </div>
                        </div>
                    );
                })}
            {image
                && image && (
                    <img
                        draggable="false"
                        src={image}
                        alt={imageAlt}
                        className={className}
                        onMouseDown={event => event.preventDefault()}
                    />
                )}
        </div>
    );
};

Picture.propTypes = {
    image: PropTypes.string,
    className: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string,
        imageAlt: PropTypes.string,
    })),
    imageId: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
};

Picture.defaultProps = {
    image: '',
    images: null,
    imageId: '',
    className: '',
};

export default Picture;
