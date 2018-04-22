import React from 'react';
import Transaction from './Transaction';
import { Table } from 'semantic-ui-react';

const Wallet = (props) => {
  const transactions = props.transactions.map(transaction => (
    <Transaction
      key={transaction._id}
      name={transaction.name}
      category={transaction.category}
      year={transaction.year}
      month={transaction.month}
      day={transaction.day}
      cost={transaction.cost}
    />
  ));

  return (
    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {transactions}
      </Table.Body>
    </Table>
  )
  
}

export default Wallet;