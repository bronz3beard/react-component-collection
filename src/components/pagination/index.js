import React from "react";
import PropTypes from "prop-types";
import styles from "./pagination.module.scss";

const Pagination = props => {
  const {
    data,
    currentPage,
    recordsPerPage,
    handlePageChange,
    handleDecrement,
    handleFirst,
    handleLast,
    handleIncrement
  } = props;

  // pagination, mapping and logic.
  const totalRecords = Math.ceil(data.length / recordsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalRecords; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers
    .slice((currentPage - 1), (currentPage - 1) + 5)
    .map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={handlePageChange}
          className={number === currentPage ? styles.active : ''}
        >
          {number}
        </li>
      );
    });

  //pagination logic
  const startPage = pageNumbers.slice(0)[0]; // 1
  const endPage = pageNumbers.slice(-1)[0]; // 10

  const firstSepPage =
    currentPage !== startPage ? <li className="disabled">...</li> : null;

  const previousPage =
    currentPage === startPage ? null : (
      <li key="Previous" onClick={handleDecrement}>
        Previous
      </li>
    );

  const firstPage =
    currentPage === startPage ? null : (
      <li key="first" onClick={handleFirst}>
        &lang;&lang;
      </li>
    );

  const lastSepPage =
    currentPage !== endPage ? <li className="disabled">...</li> : null;

  const nextPage =
    currentPage === endPage ? null : (
      <li key="Next" onClick={handleIncrement}>
        Next
      </li>
    );

  const lastPage =
    currentPage === endPage ? null : (
      <li key="last" onClick={handleLast}>
        &rang;&rang;
      </li>
    );

  return (
    <div className={styles.paginationWrapper}>
      <ul className={styles.pagination}>
        {firstPage}
        {previousPage}
        {firstSepPage}
        {renderPageNumbers}
        {lastSepPage}
        {nextPage}
        {lastPage}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      Value: PropTypes.string,
      sortOn: PropTypes.string
    })
  ),
  hasLoader: PropTypes.bool,
  handleLast: PropTypes.func.isRequired,
  handleFirst: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  recordsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
