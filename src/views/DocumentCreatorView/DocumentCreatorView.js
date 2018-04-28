import React from "react";
import EditableTemplate from "../../components/DocumentCreatorComponents/EditableTemplate";
import { List, ListItem } from "material-ui/List";
import { Col } from "react-bootstrap";
import withDraggable from "../../components/drag-and-drop/withDraggable";

const Choice = withDraggable(ListItem);

const DocumentCreatorView = () => (
  <div>
    <Col sm={12} md={3}>
      <h3>Template Options</h3>
      <List>
        <Choice name="input">Input</Choice>
        <Choice name="p">Paragraph</Choice>
      </List>
    </Col>
    <Col sm={12} md={9}>
      <EditableTemplate>
        Begin building a document template by dragging and dropping template
        options here...
      </EditableTemplate>
    </Col>
  </div>
);

export default DocumentCreatorView;
