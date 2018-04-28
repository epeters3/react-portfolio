import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
  SelectField,
  MenuItem
} from "material-ui";
import Panel from "./Panel";

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class CsvTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataTypeIndex: 0
    };
    this.renderDataTypeSelectors = this.renderDataTypeSelectors.bind(this);
    this.handleDataTypeSelection = this.handleDataTypeSelection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.csvArray.data !== nextProps.csvArray.data &&
      nextProps.csvArray.data.length > 0
    ) {
      // we're getting in new data, so try and guess the datatypes.
      const { data } = nextProps.csvArray;
      const numCols = data.length;
      const numRowsToGuessWith = Math.min(data.length, 25);
      // We'll use an object for each column to store the datatype votes in.
      let guesses = data[0].map(rowValue => ({ numNumbers: 0, numStrings: 0 }));
      for (let i = 0; i < numRowsToGuessWith; i++) {
        for (let j = 0; j < numCols; j++) {
          // guess each cell in this row,
          // adding the result to the jth column
          // in the guesses var.
        }
      }
    }
  }

  handleDataTypeSelection(colNum, value) {
    this.setState({
      [`DATATYPE_COL_${colNum}`]: value
    });
  }

  renderDataTypeSelectors(numCols) {
    let cells = [];

    for (let i = 0; i < numCols; i += 1) {
      const cell = (
        <TableHeaderColumn key={`HEADER_${i}`}>
          <SelectField
            value={
              this.state[`DATATYPE_COL_${i}`] === undefined
                ? 0
                : this.state[`DATATYPE_COL_${i}`]
            }
            floatingLabelText="Column Datatype"
            style={{ width: "100%" }}
            onChange={(event, index, value) =>
              this.handleDataTypeSelection(i, value)
            }
          >
            <MenuItem value={0} primaryText="Number" />
            <MenuItem value={1} primaryText="Date" />
            <MenuItem value={2} primaryText="Categorical" />
          </SelectField>
        </TableHeaderColumn>
      );
      cells.push(cell);
    }
    return cells;
  }

  render() {
    const { csvArray, previewMode } = this.props;

    const numRows = csvArray.data.length;
    const numCols = csvArray.data.reduce(
      (max, row) => Math.max(max, row.length),
      0
    );
    const { headers } = csvArray;

    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          {headers && (
            <TableRow>
              {headers.map((headerData, i) => (
                <TableHeaderColumn key={`HEADER_${i}`}>
                  {headerData}
                </TableHeaderColumn>
              ))}
            </TableRow>
          )}
          <TableRow>{this.renderDataTypeSelectors(numCols)}</TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {csvArray.data.map((row, i) => {
            if (previewMode && i < 5) {
              // In preview mode, return only the first 5 rows of data...
              return (
                <TableRow key={`ROW_${i}`}>
                  {row.map((cellData, i) => (
                    <TableRowColumn key={`CELL_${i}`}>
                      {cellData}
                    </TableRowColumn>
                  ))}
                </TableRow>
              );
            } else if (previewMode && i === 5 && i < numRows) {
              // .... with '...' for the 6th row.
              return (
                <TableRow key={`ROW_${i}`}>
                  {row.map((cellData, i) => (
                    <TableRowColumn key={`CELL_${i}`}>...</TableRowColumn>
                  ))}
                </TableRow>
              );
            } else if (!previewMode) {
              // just return all the rows.
              return (
                <TableRow key={`ROW_${i}`}>
                  {row.map((cellData, i) => (
                    <TableRowColumn key={`CELL_${i}`}>
                      {cellData}
                    </TableRowColumn>
                  ))}
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    );
  }
}

CsvTable.defaultProps = {
  csvArray: { data: [] },
  previewMode: true
};

export default CsvTable;
