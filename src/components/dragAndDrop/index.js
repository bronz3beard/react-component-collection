import React, { PureComponent, createRef } from "react";
import styles from "./dragAndDrop.module.scss";

class DragAndDrop extends PureComponent {
  constructor(props) {
    super(props);
    this.dropRef = createRef();
    this.selectRef = createRef();
    this.state = {
      dragging: false,
      drag: true
    };
  }

  componentDidMount() {
    const div = this.dropRef.current;
    const input = this.selectRef.current;

    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag); //needed to prevent the default browser behavior on that event.
    div.addEventListener("drop", this.handleDrop);
    input.addEventListener("change", this.handleDrop);
    this.dragCounter = 0;
  }

  componentWillUnmount() {
    const div = this.dropRef.current;
    const input = this.selectRef.current;

    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
    input.addEventListener("change", this.handleDrop);
  }

  handleDrag = event => {
    event.preventDefault();
    event.stopPropagation(); //stops the event from being propagated through parent and child elements.
  };

  handleDragIn = event => {
    event.preventDefault();
    event.stopPropagation();

    this.dragCounter++; //increment how many elements deep for each nested element with a counter
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      this.setState({
        dragging: true,
        drag: true
      });
    }
  };

  handleDragOut = event => {
    event.preventDefault();
    event.stopPropagation();

    this.dragCounter--; // need to handle dragCounter in a more react way.
    if (this.dragCounter > 0) {
      return;
    }
    this.setState({
      dragging: false
    });
  };

  handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();

    if (
      event.dataTransfer === undefined &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      this.props.handleDrop(event.target.files);
      this.dragCounter = 0;
    } else if (
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
      this.props.handleDrop(event.dataTransfer.files);
      this.dragCounter = 0;
    }
    this.setState({
      drag: false
    });
  };
  render() {
    const { dragging } = this.state;

    return (
      <div className={styles.dragContainer} ref={this.dropRef}>
        <div className={styles.dragBorder}>
          {dragging && (
            <div className={styles.dragModal}>
              <div>
                drop here{" "}
                <span role="img" aria-label="Beaming Face with Smiling Eyes">
                  😁
                </span>
              </div>
            </div>
          )}
          {!dragging && (
            <div className={styles.dragModal}>drag and drop files</div>
          )}
          <label htmlFor="file-upload" className={styles.customFileUpload}>
            Custom Upload
            <input id="file-upload" type="file" multiple ref={this.selectRef} />
          </label>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default DragAndDrop;
