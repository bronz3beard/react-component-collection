// returns only the number in a string removing letters and special characters
export const getOnlyNumbers = (stringValue, replaceValue) => (
    replaceValue
      ? stringValue.replace(/[a-zA-Z$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}]+/g, replaceValue)
      : stringValue.replace(/[a-zA-Z$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}]*/g, '')
  );
  