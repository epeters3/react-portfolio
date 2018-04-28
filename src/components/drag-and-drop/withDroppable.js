import React from "react";

/**
 * Ensure the props of the resulting component
 * are passed down to the component that will
 * be rendered in the DOM
 */
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
          onDragEnter={this.handleDragEnter}
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
