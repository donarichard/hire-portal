import { Button } from "react-bootstrap";
import React, { useState } from "react";
function ButtonComponent(props) {
  const [className] = useState(props.className);
  const [variant] = useState(props.variant);
  return (
    <Button className={className} variant={variant}>{props.children}</Button>
  );
}
export default ButtonComponent;