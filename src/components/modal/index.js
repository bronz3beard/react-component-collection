import React, { Fragment, useEffect } from "react";
import PropTypes, { element } from "prop-types";
import styles from "./modal.module.scss";

const Modal = (props) => {
  const {
    children,
    showModal,
    handleModal,
    backGroundStyle,
    hideBodyOverflowY,
  } = props;

  useEffect(() => {
    document.body.style.overflowY =
      showModal && hideBodyOverflowY ? "hidden" : "auto";
  }, [hideBodyOverflowY, showModal]);

  // TODO: Maybe add close X or icon for handleModal and remove from modalBody.

  return (
    <Fragment>
      {showModal && (
        <div
          className={styles.modalOverlay}
          style={!backGroundStyle ? null : backGroundStyle}
        >
          <div className={styles.modalBody} onClick={handleModal}>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(element),
    PropTypes.node,
  ]),
  handleModal: PropTypes.func,
  showModal: PropTypes.bool,
  backGroundStyle: PropTypes.objectOf({
    background: PropTypes.string,
    backgroundSize: PropTypes.string,
    backgroundPosition: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundAttachment: PropTypes.string,
  }),
  hideBodyOverflowY: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  handleModal: null,
  showModal: false,
  backGroundStyle: null,
  hideBodyOverflowY: true,
};

export default Modal;
