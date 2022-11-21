import { Eye, EyeClosed } from "phosphor-react";
import React, { FormEvent, ChangeEvent, useState, useEffect, useMemo } from "react";
import Button from "../Button";
import Input from "../Input";

import { Form } from "./styles";

interface UserFormProps {
  onSubmit: (object: AccountObject) => void;
  buttonDisabled?: boolean;
}

export interface AccountObject {
  username: string;
  password: string;
}
interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}
const UserForm = ({ onSubmit, buttonDisabled, ...props }: UserFormProps) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const disableSubmit = useMemo(
    () => buttonDisabled || password.length === 0 || username.length === 0,
    [password, username, buttonDisabled]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, password } = event.currentTarget.elements as FormElements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  function handleUsernameInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setUsername(value);
  }

  function handlePasswordInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setPassword(value);
  }

  function togglePasswordShowing() {
    setIsPasswordShowing((prevState) => !prevState);
  }

  return (
    <Form className="userform" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" name="username" onChange={handleUsernameInput} value={username} />
      <div className="password-holder">
        <Input
          type={isPasswordShowing ? "text" : "password"}
          placeholder="Password"
          name="password"
          onChange={handlePasswordInput}
        />
        {isPasswordShowing ? (
          <span className="eye-icon" onClick={togglePasswordShowing}>
            <Eye size={20} className="eye-icon" />
          </span>
        ) : (
          <span className="eye-icon" onClick={togglePasswordShowing}>
            <EyeClosed size={20} />
          </span>
        )}
      </div>
      <Button type="submit" className="submit" disabled={disableSubmit}>
        Sign In
      </Button>
    </Form>
  );
};

export default UserForm;
