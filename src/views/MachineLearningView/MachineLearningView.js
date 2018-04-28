import React from "react";
import { IconButton, AppBar } from "material-ui";
import FileUploader from "../../components/FileUploader";
import Panel from "../../components/Panel";
import { Col } from "react-bootstrap";
import CsvTable from "../../components/CsvTable";

import ActionAssignment from "material-ui/svg-icons/action/assignment";
import FileFileUpload from "material-ui/svg-icons/file/file-upload";

class MachineLearningView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      csvData: undefined
    };
    this.shareCSV = this.shareCSV.bind(this);
  }

  shareCSV(csvData) {
    this.setState({ csvData });
  }

  render() {
    return (
      <div>
        <Col sm={12} md={9}>
          <Panel>
            <h3>Let's Do In-Browser Machine Learning</h3>
            <p>We'll walk through the steps.</p>
          </Panel>
        </Col>

        <Col sm={12} md={9}>
          <Panel>
            <AppBar
              title="Upload CSV"
              iconElementLeft={
                <IconButton>
                  <FileFileUpload />
                </IconButton>
              }
            />
            <FileUploader shareCSV={this.shareCSV} />
          </Panel>
        </Col>

        {/* File Previewer */}

        {this.state.csvData && (
          <Col sm={12} md={9}>
            <Panel>
              <AppBar
                title="Choose Column Datatypes"
                iconElementLeft={
                  <IconButton>
                    <ActionAssignment />
                  </IconButton>
                }
              />
              <CsvTable csvArray={this.state.csvData} />
            </Panel>
          </Col>
        )}
        <br />
      </div>
    );
  }
}

export default MachineLearningView;
