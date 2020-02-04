// capitalizes entire word
export const capitaliseString = (stringValue, replaceValue) => (
    replaceValue
      ? stringValue.replace(/\b([a-z\s]+)/g, replaceValue.toUpperCase())
      : stringValue.replace(/\b([a-z]*)/g, (string) => string.toUpperCase())
  );