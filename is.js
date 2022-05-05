
is.num = (test) => typeof test === 'number';
is.nan = (test) => Number.isNaN(test);
is.str = (test) => typeof test === 'string';
is.bool = (test) => typeof test === 'boolean';
is.undef = (test) => typeof test === 'undefined';
is.def = (test) => typeof test != 'undefined';
is.arr = (test) => Array.isArray(test)
is.obj = (test) => test !== null && typeof test === 'object' && Array.isArray(test) === false;
is.fun = (test) => typeof test === "function"
is.truthy = (test) =>  (!!test);
is.falsy  = (test) =>  (!test);