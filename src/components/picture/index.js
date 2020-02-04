import React from 'react';
import PropTypes from 'prop-types';
import styles from './picture.module.scss';

/**
 * @render react
 * @name Picture
 * @description This is an img element that can have images mapped to it or just be used with a single image src.
 * @example <Picture image="https://www.w3schools.com/w3css/img_lights.jpg" imageAlt="Northern Lights" />
 * @example <Picture image={images} />
 */

const Picture = (props) => {
    const { image, images, imageAlt, imageId } = props;

    return (
        <div className={styles.row}>
            {images
                && images.map((image, index) => {
                    return (
                        <div className={styles.column} key={!imageId ? index : imageId}>
                            <div className={styles.imageContainer}>
                                <img
                                    id={!imageId ? index : imageId}
                                    draggable="false"
                                    src={image.imageUrl}
                                    alt={image.imageAlt}
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
                        onMouseDown={event => event.preventDefault()}
                    />
                )}
        </div>
    );
};

Picture.propTypes = {
    image: PropTypes.string,
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
};

export default Picture;
