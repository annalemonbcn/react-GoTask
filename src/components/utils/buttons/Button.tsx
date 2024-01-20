import styled from "styled-components";
import { colors } from "../../../theme";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  $primary?: boolean;
}

const StyledButton = styled.div<ButtonProps>`
  width: 100%;
  padding: 12px 24px;

  color: ${(props) => (props.$primary ? "white" : "black")};
  background-color: ${(props) => (props.$primary ? colors.primary : "white")};

  font-size: 20px;
  text-align: center;
  font-weight: 700;
  border-radius: 8px;
  border: 0;
`;

const Button = ({ text, $primary }: ButtonProps) => {
  return (
    <StyledButton text={text} $primary={$primary}>
      <Link to="/tasks">{text}</Link>
    </StyledButton>
  );
};

export default Button;
