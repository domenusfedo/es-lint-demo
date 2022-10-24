import { NextPage } from 'next';
import React from 'react';

// Invalid! //Prefer default export.
// export const InvalidPage: NextPage = () => <div>invalid-page</div>;

// Valid! //All files with .tsx extension must be exported as default
const ValidPage: NextPage = () => <div>invalid-page</div>;
export default ValidPage;
