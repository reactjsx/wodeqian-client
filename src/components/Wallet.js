import React, { Component } from 'react';
import { getTransactions } from '../utils/helper';
import TransactionList from './TransactionList';
import AddTransactionPanel from './AddTransactionPanel';

import { Header, Icon } from 'semantic-ui-react';

class Wallet extends Component {
  state = {
    wallet: '',
    transactions: [],
    budgets: []
  }
  
  componentDidMount() {
    getTransactions(transactions => {
      this.setState({
        wallet: transactions.name,
        transactions: transactions.transactions,
        budgets: transactions.budgets
      });
    });
  }
  
  handleAddButtonClick = () => {
    console.log(this.state);
  }
  
  render() {
    return (
      <div className='ui container'>
        <Header
          dividing
          icon
          as='h1'
          style={{display: 'block'}}
        >
          <Icon name='money' />
          我的錢
        </Header>
        <AddTransactionPanel
          onAddButtonClick={this.handleAddButtonClick}
          icon='plus'
        />
        <TransactionList
          transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default Wallet;