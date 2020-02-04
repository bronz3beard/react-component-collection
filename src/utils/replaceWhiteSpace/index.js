// replace whitespace with any character or no space
export const replaceWhiteSpace = (stringValue, replaceValue) => (
    replaceValue
      ? stringValue.replace(/[\s]/g, replaceValue)
      : stringValue.replace(/[\s]+/g, '')
  );
  