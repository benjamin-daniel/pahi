import React, {Component} from 'react'
import { Menu, Form, Grid } from 'semantic-ui-react'
import {Header} from 'react-router-dom'
import AccountForm from './AccountForm'
import InformationTable from './InformationTable'
import AccountDetails from './AccountDetails';

const  AccountBalance = (props) => {
    return (
        <Grid columns={3}>
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>
            <Form>
            <Form.TextArea disabled label="Account Balance" placeholder="Account Balance" />
        </Form>
        </Grid.Column>
        <Grid.Column></Grid.Column>
        </Grid.Row>
        </Grid>
        
    )
}

function Home(props) {
    return (
        <React.Fragment>
            <AccountForm />
            <AccountBalance />
            <InformationTable />
            <AccountDetails />
        </React.Fragment>
        )
}
export default Home;