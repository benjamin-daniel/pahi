import React from "react";
import {
  Table,
  Label,
  Select,
  Popup,
  Form,
  Grid,
  Button
} from "semantic-ui-react";
import Plaid from "../utils/plaid";
import range from "../utils/range";

const plaid = new Array();
Plaid.forEach(function(category) {
  plaid.push({
    key: category.toLocaleLowerCase(),
    text: category,
    value: category.toLocaleLowerCase()
  });
});

const SelectCategory = ({ onChange, disabled, ...props }) => {
  return (
    <React.Fragment>
      <Form.Field
        {...props}
        control={Select}
        label="Category"
        options={plaid}
        onChange={onChange}
        placeholder="Category"
      />
      <Button disabled={disabled} className="space-top">
        Assign Category
      </Button>
    </React.Fragment>
  );
};

class InformationTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    selected: null, // category selected
    selectedCell: null, // id of the cell
    table: [{ id: 0 }, { id: 1 }, { id: 2 }]
  };

  _setCat = (i, cat) => {
    const newTable = this.state.table.map(obj => {
      if (obj.id == i) {
        return { ...obj, id: obj.id, cat: cat };
      }
      return obj;
    });
    this.setState({ table: newTable });
  };
  _onSelect = (e, { value }) => {
    const { selectedCell, selected } = this.state;
    this._setCat(selectedCell, value);
  };

  render() {
    const { selectedCell, selected, table } = this.state;
    // console.log({ selectedCell, selected });
    return (
      <Popup
        trigger={
          <div className="space-top">
            <Table celled selectable striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Header</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {table.map(({ id, cat = "" }, i) => (
                  <Table.Row
                    active={selectedCell == id}
                    onClick={e => {
                      if (this.state.selectedCell != id) {
                        this.setState({ selectedCell: id });
                      }
                    }}
                    key={id}
                  >
                    <Table.Cell>$55</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>{cat}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column />
                <Grid.Column>
                  <SelectCategory
                    disabled={selected && selectedCell == null ? true : false}
                    onChange={this._onSelect}
                  />
                </Grid.Column>
                <Grid.Column />
              </Grid.Row>
            </Grid>
          </div>
        }
        content="Select Transaction to fill category"
        position="right center"
      />
    );
  }
}

export default InformationTable;
