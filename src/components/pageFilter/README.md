  ```js
    // This is an example of a usage for filter function in parent componentn that can be passed to the OnPageFilter
    const App = () => {
      const [query, setQuery] = React.useState('');

      const searchFilter = event => {
        const searchValue = event.target.value;
        setQuery(searchValue);
      };

      return (
        <OnPageFilter
          query={query}
          placeHolder={placeHolder}
          searchFilter={searchFilter}
        />
      );
    };
  ```

This is a simple on page data filter the only required prop is the filter handler for the OnChange of the input.
You will need to builld your own filter function to handle matching the query to a data attribute to filter the data displayed on the screen.

query: defaults to empty string
placeHolder: defaults to empty string

