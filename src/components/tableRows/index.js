import React from "react";
import PropTypes from "prop-types";
import styles from "./tableRows.module.scss";

const TableRows = props => {
  const { columns, data } = props;

  const getDescendantProp = (obj, desc) => {
    const arr = desc.split(".");
    while (arr.length && (obj = obj[arr.shift()]));
    return obj;
  };

  return (
    <tbody>
      <tr className={styles.tableRow}>
        {columns && columns.map((column, key) => {
          return <td key={key}>{getDescendantProp(data && data, column.Value)}</td>;
        })}
      </tr>
    </tbody>
  );
};

TableRows.propTypes = {
  data: PropTypes.shape({}).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
};

TableRows.defaultProps = {
    data: {},
    columns: [],
};

export default TableRows;
