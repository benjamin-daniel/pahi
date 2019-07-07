import React from "react";
import { Grid } from "semantic-ui-react";

const MiddleComponent = props => {
  return (
    <Grid columns={3} {...props}>
      <Grid.Row>
        <Grid.Column />
        <Grid.Column>{props.children}</Grid.Column>
        <Grid.Column />
      </Grid.Row>
    </Grid>
  );
};

export default MiddleComponent;
