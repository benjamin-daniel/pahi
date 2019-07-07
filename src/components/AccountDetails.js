import React, { Component } from "react";
import { Form, Button, Table } from "semantic-ui-react";
import MiddleComponent from "./MiddleComponent";
import _ from "lodash";

const range = n => Array.from(Array(n).keys());

const ReferenceTable = props => {
  return (
    <Table celled selectable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Reference Name</Table.HeaderCell>
          <Table.HeaderCell>Account Balance</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {range(5).map((n, i) => (
          <Table.Row key={i}>
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

const Override = props => {
  return (
    <Form>
      <Form.Field>
        <label>Reference Name</label>
        <input placeholder="Reference Name" />
      </Form.Field>
      <Form.Field>
        <label>Account Balance Override</label>
        <input placeholder="Password" />
      </Form.Field>
      <Button>Submit</Button>
    </Form>
  );
};

const AccountDetails = props => {
  return (
    <div>
      <MiddleComponent className="space-top">
        <Override />
      </MiddleComponent>
      <ReferenceTable />
    </div>
  );
};

export default AccountDetails;
