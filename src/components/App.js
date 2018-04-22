import React from 'react';
import WalletList from './WalletList';
import { Route, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    <Route path='/wallets' component={ WalletList } />
    <Route exact path='/' render={() => (
      <Redirect
        to='/wallets'
      />
    )}
    />
  </div>
);

export default App;