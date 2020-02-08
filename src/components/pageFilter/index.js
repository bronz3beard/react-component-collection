import React from "react";
import PropTypes from "prop-types";
import styles from "./pageFilter.module.scss";

const OnPageFilter = (props) => {
  const { query, placeHolder, searchFilter } = props;

  return (
    <form className={styles.filterForm}>
      <input
        id="filter"
        type="text"
        name="query"
        value={query}
        placeholder={placeHolder}
        onChange={searchFilter}
      />
    </form>
  );
};

OnPageFilter.propTypes = {
  quer: PropTypes.string,
  placeHolder: PropTypes.string,
  searchFilter: PropTypes.func.isRequired,
};

OnPageFilter.defaultProps = {
  query: '',
  placeHolder: '',
};

export default OnPageFilter;
