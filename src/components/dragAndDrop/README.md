```js
    const handleDrop = (files) => {
        let tempFileList = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (!file.name) {
            return;
            }
            alert(file.name)
            tempFileList.push(file);
        }
    };

      <DragAndDrop handleDrop={handleDrop}>
        <div
          type="file"
          name="files"
          id="drop-zone"
          accept="image/*"
          multiple
        ></div>
      </DragAndDrop>
 ```

`dragAndDrop` will need a handleDrop function to handle what happens when files are dropped into drop zone or selected. e.g. uploaded to a database.
