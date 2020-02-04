// removes special characters on standard en-us keyboard config
export const removeSpecialCharacters = (stringValue, replaceValue) => (
    replaceValue
      ? stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}0-9]+/g, replaceValue)
      : stringValue.replace(/[$&+,:;=?@#|'"‘’<>.^*()%!-._\\\/`~\[\]\{\}0-9]*/g, '')
  );
  