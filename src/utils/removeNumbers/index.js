// removes all numbers in a string
export const removeNumbers = (stringValue, replaceValue) => (
    replaceValue ? stringValue.replace(/[0-9\s]+/g, replaceValue) : stringValue.replace(/[0-9]*/g, '')
  );
  