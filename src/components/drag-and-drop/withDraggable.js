import React from "react";

// Higher Order Component that makes its component
// draggable, transferring the component's name prop
// as the data transferred.
const withDraggable = Component => {
  return class extends React.Component {
    handleDragStart = e => {
      console.log(e.target.getAttribute("name"));
      e.dataTransfer.setData("text/plain", e.target.getAttribute("name"));
    };

    render = () => (
      <Component
        draggable="true"
        onDragStart={this.handleDragStart}
        name="draggable-element"
        {...this.props}
      />
    );
  };
};

export default withDraggable;
