import React from 'react';
import { Table } from 'semantic-ui-react';

const Transaction = (props) => (
  <Table.Row>
    <Table.Cell>{props.name}</Table.Cell>
    <Table.Cell>{props.category}</Table.Cell>
    <Table.Cell>{props.cost}</Table.Cell>
    <Table.Cell>{`${props.year}/${props.month}/${props.day}`}</Table.Cell>
  </Table.Row>
);

export default Transaction;