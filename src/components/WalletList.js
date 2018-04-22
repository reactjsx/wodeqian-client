import React, { Component } from 'react';
import { getTransactions, createTransaction } from '../utils/helper';
import AddTransactionPanel from './AddTransactionPanel';
import Wallet from './Wallet';
import { Route, NavLink } from 'react-router-dom';

import { Button, Icon, Segment } from 'semantic-ui-react';

class WalletList extends Component {
  state = {
    wallets: []
  }
  
  componentDidMount() {
    getTransactions(wallets => {
      this.setState({
        wallets: wallets
      });
    });
  }
  
  handleAddButtonClick = () => {
    console.log(this.state);
  }

  handleSubmit = (transaction) => {
    console.log(transaction);
    createTransaction(transaction)
      .then(() => getTransactions(wallets => {
        this.setState({
          wallets: wallets
        });
      }))
      .then(() => this.forceUpdate());
  }
  
  render() {
    if (this.state.wallets.length > 0) {
      const walletNames = this.state.wallets.map(wallet => (
        <NavLink
          className='item'
          key={wallet._id}
          to={`/wallets/${wallet._id}`}
        >
          {wallet.name}
        </NavLink>
      ));
      return (
        <div className='ui container'>
          <div className='ui dividing header' style={{marginTop: '30px'}}>
            Wo De Qian
          </div>
          <div className='ui tabular top attached menu'>
            {walletNames}
            <div className='item'>
              <Button
                icon='plus'
                basic
              />
            </div>
          </div>
          <Segment raised>
            <AddTransactionPanel
              walletNames={this.state.wallets.map(wallet => (
                {
                  text: wallet.name,
                  value: wallet.name
                }
              ))}
              onSubmit={this.handleSubmit}
            />
            <Route
              path='/wallets/:walletId'
              render={({ match }) => {
                const wallet = this.state.wallets.find(w => (
                  w._id === match.params.walletId
                ));
                return (
                  <Wallet
                    transactions={wallet.transactions}
                  />
                )
              }}
            />
          </Segment>
        </div>
      );
    } else {
      return (
        <Icon
          name='refresh'
        />
      )
    }
  }
}

export default WalletList;