import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { setSecretElement } from "../actions/elementActions";

const ElementCard = ({ element }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Card className="element-card">
      <CardImg alt={element.displayName} src={element.img} top width="100%" />
      <CardBody>
        <CardTitle tag="h3">{element.name.toUpperCase()}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
        <CardText>
          {element.description.length > 250
            ? element.description.length.substring(0, 250) + "..."
            : element.description}
        </CardText>
        <Button
          color="success"
          block
          onClick={() => {
            navigate("/");
            dispatch(setSecretElement({}));
          }}>
          Continuar
        </Button>
      </CardBody>
    </Card>
  );
};

const mapDispatchToProps = {
  setSecretElement,
};

export default connect(null, mapDispatchToProps)(ElementCard);
