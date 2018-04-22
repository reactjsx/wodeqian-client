import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import AddTransactionForm from './AddTransactionForm';

class AddTransactionPanel extends Component {
  state = {
    displayAddButton: true
  };
  
  handleAddButtonClick = () => this.setState({
    displayAddButton: false
  });
  
  handleCancelButtonClick = () => this.setState({
    displayAddButton: true
  });
  
  handleSubmit = (transaction) => {
    this.props.onSubmit(transaction);
    this.setState({ displayAddButton: true })
  }
  
  render() {
    if (this.state.displayAddButton) {
      return (
        <Button
          icon='plus'
          color='green'
          onClick={this.handleAddButtonClick}
        />
      );
    }
    return (
      <AddTransactionForm
        walletNames={this.props.walletNames}
        onCancelClick={this.handleCancelButtonClick}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default AddTransactionPanel;