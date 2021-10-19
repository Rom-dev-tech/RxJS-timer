const helperFunctionForTimer = value => (value.toString().length === 1 ? '0' : '').concat(value);

const helpers = {
  helperFunctionForTimer,
};

export default helpers;
