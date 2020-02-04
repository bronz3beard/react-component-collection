// this checks for duplicates in the db
export const isDuplicate = (item, data) => {
    const links = Array.from(
        new Set(data.map(duplicate => duplicate.field.itemId))
    );
    const isDuplicate = links.indexOf(item) > -1 ? true : false;

    return isDuplicate;
};
