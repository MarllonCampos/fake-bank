import { Container } from "./styles";
import phone from "../../assets/phone.png";

interface LeftSideAccountProps {
  image: string;
}
const LeftSideAccount = ({
  image,
  ...props
}: LeftSideAccountProps) => {
  return (
    <Container>
      <img src={image} alt="A smartphone tilted" />
    </Container>
  );
};

export default LeftSideAccount;
