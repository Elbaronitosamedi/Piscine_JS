const arrToSet = (test) => new Set(test);

const arrToStr = (test) => test.join('');

const setToArr = (test) => Array.from(test);

const setToStr = (test) => Array.from(test).join('');

const strToArr = (test) => Array.from(test)

const strToSet = (test) => new Set(Array.from(test));

const mapToObj = (test) => Object.fromEntries(test);

const objToArr = (test) => Object.values(test);

const objToMap = (test) => new Map(Object.entries(test));

const arrToObj = (test) => Object.assign({}, test);

const strToObj = (test) => Object.assign({}, Array.from(test));

const superTypeOf = (test) => {
    switch (typeof test) {
        case "number":
          return "Number";
        case "string":
          return "String";
        case "boolean":
          return "Boolean";
        case "undefined":
          return "undefined";
        case "object":
          if (Array.isArray(test)) {
            return "Array";
          }
          if (test instanceof Set) {
            return "Set";
          }
          if (test instanceof Map) {
            return "Map";
          }
          if (test === null) {
            return "null";
          }
          return "Object";
        case "function":
          return "Function";
        default:
          return typeof test;
      }
}