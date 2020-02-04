import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

const Picture = (props) => {
    const { image, images, imageAlt, imageId } = props;

    const share = () => {
        window.alert('The product has been shared!');
    }
    useEffect(() => { share(); }, []);
    return (
        <Fragment>
            {images
                && images.map(image => {
                    return (
                        <div className="column" key={imageId}>
                            <div className="image-container">
                                <img
                                    id={imageId}
                                    draggable="false"
                                    src={image.imageUrl}
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
        </Fragment>
    );
};

Picture.propTypes = {
    image: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
        imageUrl: PropTypes.string
    })
    ),
    imageAlt: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
};

Picture.defaultProps = {
    image: '',
    images: null,
    imageId: '',
};

export default Picture;
