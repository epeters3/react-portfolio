import React from "react";
import Panel from "../Panel";
import styled from "styled-components";
import withDroppable from "../drag-and-drop/withDroppable";
import ShortAnswer from "./ShortAnswer";
import LongAnswer from "./LongAnswer";

function handleDrop(e) {
  const data = e.dataTransfer.getData("text/plain");
  this.setState(prevState => ({
    data: [...prevState.data, data]
  }));
  e.preventDefault();
}

const BigPanel = styled(Panel)`
  width: 100%;
  height: 70vh;
`;

class EditablePanel extends React.Component {
  static defaultProps = {
    components: {
      textarea: LongAnswer,
      input: ShortAnswer
    }
  };

  render = () => {
    const { data, children, ...props } = this.props;
    return (
      <BigPanel {...props}>
        {data.length > 0
          ? data.map((name, i) => {
              const Component = this.props.components[name];
              return <Component key={`element-${i}`} />;
            })
          : children}
      </BigPanel>
    );
  };
}

const dropConfig = { handleDrop, initialState: { data: [] } };

export default withDroppable(dropConfig)(EditablePanel);
