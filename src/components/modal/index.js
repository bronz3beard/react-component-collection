import React, { useEffect } from "react";
import PropTypes, { element } from "prop-types";
import styles from "./modal.module.scss";

/**
 * @render react
 * @name Modal
 * @description This is a simple modal element which can contain any type of children.
Modal props:  
`children` = child properties of the Modal component.  
`showModal={showModal}` = a Boolean to toggle Modal visibility.  
`handleModal={handleModal}` = A simple Boolean function to show and hide modal.  
`backGroundStyle={backGroundStyle}` = This is an alternative to having a black modal background, you can pass inline style of a background image.
`hideBodyOverflowY={false}` = This is set to `true` by default.
 * @example <Modal>This is a Modal</Modal>
 */

const Modal = props => {
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
    <>
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
    </>
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
