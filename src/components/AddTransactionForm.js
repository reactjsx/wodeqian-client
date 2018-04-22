import React, { Component } from 'react';
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';
import years from '../common/years';
import months from '../common/months';
import days from '../common/days';
import category from '../common/category';

class AddTransactionForm extends Component {
  state = {
    transaction: {
      wallet: '',
      name: '',
      category: '',
      cost: '',
      year: '',
      month: '',
      day: ''
    },
    errors: {}
  };
  
  handleInputChange = (event, data) => this.setState({
    transaction: { ...this.state.transaction, [data.name]: data.value }
  });
  
  handleSubmit = () => {
    const transaction = { ...this.state.transaction };
    this.setState({
      transaction: {
        wallet: '',
        name: '',
        category: '',
        cost: '',
        year: '',
        month: '',
        day: ''
      }
    });
    this.props.onSubmit(transaction);
  }
  
  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <Dropdown
              placeholder='Wallet'
              value={this.state.transaction.wallet}
              onChange={this.handleInputChange}
              selection
              fluid
              options={this.props.walletNames}
              name='wallet'
            />
          </Form.Field>
          
          <Form.Field>
            <Input
            placeholder='Name'
              value={this.state.transaction.name}
              onChange={this.handleInputChange}
              fluid
              name='name'
            />
          </Form.Field>
          
          <Form.Field>
            <Dropdown
              placeholder='Category'
              value={this.state.transaction.category}
              onChange={this.handleInputChange}
              selection
              fluid
              options={category}
              name='category'
            />
          </Form.Field>
          
          <Form.Field>
            <Input
              placeholder='Cost'
              value={this.state.transaction.cost}
              onChange={this.handleInputChange}
              fluid
              name='cost'
            />
          </Form.Field>
          
          <Form.Field>
            <Dropdown
              placeholder='Year'
              value={this.state.transaction.year}
              onChange={this.handleInputChange}
              selection
              fluid
              options={years}
              name='year'
            />
          </Form.Field>
          
          <Form.Field>
            <Dropdown
              placeholder='Month'
              value={this.state.transaction.month}
              onChange={this.handleInputChange}
              selection
              fluid
              options={months}
              name='month'
            />
          </Form.Field>
          
          <Form.Field>
            <Dropdown
              placeholder='Day'
              value={this.state.transaction.day}
              onChange={this.handleInputChange}
              selection
              fluid
              options={days}
              name='day'
            />
          </Form.Field>
        </Form.Group>
        
        <Form.Group  widths='equal'>
          <Form.Field>
            <Button
              onClick={this.handleSubmit}
              attached='bottom'
              basic
              color='green'
            >
              Submit
            </Button>
          </Form.Field>
          
          <Form.Field>
            <Button
              attached='bottom'
              basic
              color='red'
              onClick={this.props.onCancelClick}
            >
              Cancel
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

export default AddTransactionForm;