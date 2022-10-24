import React from 'react';

export const Test = () => {
  const isExampleTrue = true;

  // Invalid! //Identifier 'is_twoja_stara' is not in camel case.
  // eslint-disable-next-line camelcase, no-unused-vars
  const is_example_true = true;

  return <div>{isExampleTrue && 'Example'}test</div>;
};
