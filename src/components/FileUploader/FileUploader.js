import React from "react";
import { RaisedButton, Checkbox } from "material-ui";

// const csv=require('csvtojson')

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileArray: null,
      apiResponse: {},
      hasHeaderRow: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let { value, name, type } = event.target;
    if (type === "checkbox") {
      this.setState(oldState => ({
        [name]: !oldState[name]
      }));
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    // Add files to FormData object.
    let formData = new FormData();
    const files = this.filesInput.files;
    for (let key in files) {
      if (files.hasOwnProperty(key) && files[key] instanceof File) {
        formData.append(key, files[key]);
      }
    }

    // Read into browser as string
    let values = formData.values();
    const fileInfo = values.next().value;
    let fileReader = new FileReader();
    fileReader.readAsText(fileInfo);

    fileReader.onload = () => {
      // fires this callback once the fileInfo is 'loaded' as text.
      let result = fileReader.result.split("\n");
      result = result.map(row => row.split(","));
      console.log(result);
      // Add JSOnified file to component's state.
      if (this.state.hasHeaderRow) {
        this.props.shareCSV({
          headers: result[0],
          data: result.slice(1)
        });
      } else {
        this.props.shareCSV({ data: result });
      }
    };
  }

  // Handling files in React: https://medium.com/ecmastack/uploading-files-with-react-js-and-node-js-e7e6b707f4ef
  // Also https://www.reddit.com/r/reactjs/comments/5dttlm/how_do_i_upload_files_with_the_current_version_of/
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <input
          type="file"
          accept=".csv"
          id="csv-upload"
          ref={input => {
            this.filesInput = input;
          }}
        />
        <br />
        <Checkbox
          checked={this.state.hasHeaderRow}
          name="hasHeaderRow"
          label={
            <span style={{ fontWeight: "normal" }}>
              Does your CSV file have a header row?
            </span>
          }
          onCheck={this.handleInputChange}
          style={{ marginBottom: "1em" }}
        />
        <RaisedButton type="submit" label="Upload File" />
      </form>
    );
  }
}

FileUploader.defaultProps = {};

export default FileUploader;
