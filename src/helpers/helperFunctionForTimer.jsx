const helperFunctionForTimer = value => (value.toString().length === 1 ? '0' : '') + value;

const helpers = {
  helperFunctionForTimer,
};

export default helpers;
