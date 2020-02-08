import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../loadSpinner';
import OnPageFilter from '../pageFilter';
import TableHeaders from '../tableHeaders';
import TableRows from '../tableRows';
import Pagination from '../pagination';

import { arraySort } from '../../utils/arraySort';

import styles from './dataTable.module.scss';

const DataTable = props => {
  const { data, columns, hasLoader, totalRecordsPerPage } = props;
  const [dataSet, setDataSet] = useState([]);
  const [inputValue, setInputValue] = useState({
    query: {
      value: '',
      placeHolder: 'Table filter'
    }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState({ key: 'asc' });
  const recordsPerPage = totalRecordsPerPage;

  useEffect(() => {
      setDataSet(data)
    }, [data]);

  // Column Sort handler + Logic
  const columnSort = key => {
    const tableData = data;
    const newData = arraySort(tableData, sortOrder, key);
    setSortOrder({
      [key]: sortOrder[key] === 'asc' ? 'desc' : 'asc'
    });
    setDataSet(newData);
  };

  //Pagination
  const handlePageChange = event => {
    const currentPage = Number(event.target.id);
    setCurrentPage(currentPage);
  };
  // Logic for pagination next page (pages go forward 1 at a time)
  const handleIncrement = () => {
    setCurrentPage(currentPage + 1);
  };
  // Logic for pagination previous page (pages go back 1 at a time)
  const handleDecrement = () => {
    setCurrentPage(currentPage - 1);
  };
  // Logic for pagination first page
  const handleFirst = () => {
    setCurrentPage(1);
  };
  // Logic for pagination last page
  const handleLast = () => {
    setCurrentPage(Math.ceil(dataSet.length / recordsPerPage));
  };

  //on page table filter handler
  const searchFilter = event => {
    const { query } = inputValue;
    const name = event.target.name;
    const value = event.target.value;

    setInputValue({
      ...query,
      [name]: {
        ...query[name],
        value
      }
    });
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  //table data filtered by query for the on page table filter
  const lowercasedFilter = inputValue.query.value.toLowerCase();
  const tableData = data
    .filter(item => {
      return Object.keys(item).some(
        key =>
          item[key]
            .toString()
            .toLowerCase()
            .indexOf(lowercasedFilter) !== -1 || !lowercasedFilter
      );
    })
    .slice(indexOfFirstRecord, indexOfLastRecord);

  return hasLoader ? (
    <Preloader />
  ) : (
    <div style={{ width: `${100}%`, overflow: "hidden", alignContent: "center"}}>
      <OnPageFilter
        searchFilter={searchFilter}
        query={inputValue.query.value}
        placeHolder={inputValue.query.placeHolder}
      />
      <table className={styles.dataTable}>
        <TableHeaders columns={columns} columnSort={columnSort} />
        {tableData.map((record, key) => {
          return <TableRows key={key} columns={columns} data={record} />;
        })}
      </table>
      <Pagination
        data={dataSet}
        recordsPerPage={recordsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleDecrement={handleDecrement}
        handleFirst={handleFirst}
        handleLast={handleLast}
        handleIncrement={handleIncrement}
      />
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      Value: PropTypes.string,
    })
  ),
  hasLoader: PropTypes.bool,
  totalRecordsPerPage: PropTypes.number.isRequired
};

DataTable.defaultProps = {
  hasLoader: false,
  totalRecordsPerPage: 30
};

export default DataTable;
