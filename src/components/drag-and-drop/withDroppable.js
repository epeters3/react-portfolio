import React from "react";

const withDroppable = ({ handleDrop, initialState }) => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleDrop = handleDrop.bind(this);
    }

    state = { isDraggedOn: false, ...initialState };

    handleDragOver = e => e.preventDefault();

    handleDragEnter = e => {
      this.setState({ isDraggedOn: true });
      e.preventDefault();
    };

    handleDragLeave = e => this.setState({ isDraggedOn: false });

    render = () => {
      return (
        <Component
          onDrop={this.handleDrop}
          onDragEnter={this.makeDropable}
          onDragOver={this.handleDragOver}
          onDragLeave={this.handleDragLeave}
          {...this.state}
          {...this.props}
        />
      );
    };
  };
};

export default withDroppable;
