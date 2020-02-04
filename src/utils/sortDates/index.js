export const sortDates = (dates) => {
    const sortedDatesArray = dates.sort((a, b) => (
        formatDate(a.dt_txt) - formatDate(b.dt_txt)
    ));

    return sortedDatesArray;
};
