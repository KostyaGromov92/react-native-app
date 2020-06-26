/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Step3, Step4, Step5} from './src/screens/registration';

// TODO Commented components only for check my work

// import {Transaction} from './src/screens/transaction';
// import {Payment} from './src/screens/payment';
// import {Chat} from './src/screens/chat';
// import {Favorites} from './src/screens/favorites';
// import {About} from './src/screens/aboutCompany';

// import {TRANSACTION_LIST} from './src/constants/transaction';

const App: () => React$Node = () => {
  // TODO The same, check transaction component
  // return <Transaction transactionList={TRANSACTION_LIST} />;
  return <Step4 />;
};

export default App;
