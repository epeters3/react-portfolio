import React from "react";
import EditableTemplate from "../../components/DocumentCreatorComponents/EditableTemplate";
import { List, ListItem } from "material-ui/List";
import { Col } from "react-bootstrap";
import withDraggable from "../../components/drag-and-drop/withDraggable";
import withDroppable from "../../components/drag-and-drop/withDroppable";

const Choice = withDraggable(ListItem);
const TemplateArea = withDroppable(EditableTemplate);

const DocumentCreatorView = () => (
  <div>
    <Col sm={12} md={3}>
      <List>
        <Choice name="input">Input</Choice>
        <Choice name="p">Paragraph</Choice>
      </List>
    </Col>
    <Col sm={12} md={9}>
      <EditableTemplate>Hello World! (I am editable)</EditableTemplate>
    </Col>
  </div>
);

export default DocumentCreatorView;
