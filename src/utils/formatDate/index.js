import moment from 'moment';

export const formatDate = (DateTimeStamp, format = 'dddd Do MMMM YYYY h:mma') => {
    const utcDate = moment.utc(DateTimeStamp).format('YYYY-MM-DD HH:mm:ss');
    const stillUtc = moment.utc(utcDate).toDate();
    const local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss');
    const DATE_FORMATS = {
        day: 'dddd',
        time: 'h:mma',
        searchTime: 'h:00a',
        dateTime: 'Do, h:mma',
        dateNoTime: 'dddd Do MMMM YYYY',
    };

    return moment(local).format(DATE_FORMATS[format] || format);
};
