import React from 'react';

export const Test = () => {
  const isExampleTrue = true;
  // Invalid! //Identifier 'is_example_true' is not in camel case.
  // eslint-disable-next-line camelcase, @typescript-eslint/no-unused-vars
  const is_example_true = true;

  return <div>{isExampleTrue && 'Example'}test</div>;
};
