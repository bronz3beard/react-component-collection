// find and replace html element - WIP
export const replaceHtmlElement = (stringValue, element, replaceValue) => (
    stringValue.replace(`/<${element}(?:'[^']*'['']*|'[^']*'['']*|[^''>])+>([\w\d\s:,°.-]*)/g`, replaceValue)
);
