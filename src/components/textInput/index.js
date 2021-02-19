import { Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
function TextInput(props) {
  const onChange = (value)=>{
      props.onChange(value)
  }
  return (
    <InputGroup>
      <FormControl onChange={e=>onChange(e.target.value)} placeholder="Search" />
    </InputGroup>
  );
}
export default TextInput;
