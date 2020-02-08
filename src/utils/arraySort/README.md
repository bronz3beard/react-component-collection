```js 
    export const arraySort = (array, sortOrder, key) => {
    const arraySorted = array.sort((a, b) =>
        sortOrder[key] === 'asc' ? a[key] > b[key] : b[key] > a[key]
    );
    return arraySorted;
    };

    // Usage
    const newData = arraySort(tableData, sortOrder, key);
```

The above function will take an array, a sortOrder object and a key to sort on.

`sortOrder` = `{ key: 'asc' }`
`array` = `[]`
`key` = `item.field.id` a.k.a `PropType.string` if you have an id of type number; Number(item.field.id)