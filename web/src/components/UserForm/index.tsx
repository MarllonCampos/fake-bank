import React from "react";
import Button from "../Button";
import Input from "../Input";

import { Form } from "./styles";

const UserForm: React.FC = () => {
  return (
    <Form className="userform">
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button className="submit">Sign In</Button>
    </Form>
  );
};

export default UserForm;
