import React, { Component } from "react";
import { Grid, Input, Form, Checkbox, Button } from "semantic-ui-react";
import _ from "lodash";

const AccountForm = props => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <label># days of transaction</label>
              <input placeholder="10" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  );
};

export default AccountForm;
