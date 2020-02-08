import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./tableHeaders.module.scss";

const TableHeaders = props => {
  const { columns, columnSort } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeWindow = () => {
      setWindowWidth(window.innerWidth);
      //console.log(window.innerWidth);
    };
    window.addEventListener("resize", resizeWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  if (windowWidth > 760) {
    return (
      <tbody>
        <tr>
          {columns.map((column, key) => {
            return (
              <th
                className={styles.tableHeaders}
                key={key}
                onClick={() => columnSort(column.Value)}
              >
                {column.Header}
              </th>
            );
          })}
        </tr>
      </tbody>
    );
  } else {
    return <React.Fragment />;
  }
};

TableHeaders.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
  columnSort: PropTypes.func.isRequired
};

export default TableHeaders;
