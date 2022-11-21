import ReactDOM from "react-dom";

import { Container, Overlay } from "./styles";

import Button from "../Button";
import { CircleNotch } from "phosphor-react";

function Loader({}) {
  const el = document.getElementById("modal-root") as HTMLElement;
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <CircleNotch size={94} className="loader" />
      </Container>
    </Overlay>,
    el
  );
}

export default Loader;
