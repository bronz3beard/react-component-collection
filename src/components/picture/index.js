import React from 'react';
import PropTypes from 'prop-types';
import styles from './picture.module.scss';

/**
 * @render react
 * @name Picture
 * @description This is an img element that can be passed an images array or just be used with a single image src. The Images array can have a maximum of `two items` in the array, the `key` can be called anything you like (key is not restricted to `imageUrl` and `imageAlt` as shown in prop types) the `key` that holds the image url value must be secure and contain `https://` this is what the variable is testing for to know which `key value pair` has the `image url` and which has the `alternative text`.
 If you need to add more items to your array, you will need to add more tests for `values`
 NOTE: the array concept is still a WIP.
 * 
 * @example <Picture image="https://www.w3schools.com/w3css/img_lights.jpg" imageAlt="Northern Lights" />
 * @example <Picture image={images} /> 
 */

const Picture = (props) => {
    const { image, images, imageAlt, imageId } = props;

    return (
        <div className={styles.row}>
            {images
                && images.map((image, index) => {
                    const objValue = Object.values(image);

                    if (!objValue || !objValue[0] || !objValue[1]) { 
                        return null;
                    }
                    const imageAlt = objValue && objValue[0].indexOf('https://') > -1
                    ?  objValue[1] : objValue[0];
                    const imageUrl = objValue && objValue[0].indexOf('https://') > -1
                      ?  objValue[0] : objValue[1];

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
