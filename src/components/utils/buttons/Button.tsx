import styled from "styled-components";

interface ButtonProps {
  text: string;
  $primary?: boolean;
}

const StyledButton = styled.div<ButtonProps>`
  width: 100%;
  padding: 12px 24px;

  color: ${(props) => (props.$primary ? "white" : "black")};
  background-color: ${(props) => (props.$primary ? "#5e87e3" : "white")};

  font-size: 20px;
  text-align: center;
  font-weight: 700;
  border-radius: 8px;
  border: 0;
`;

const Button = ({ text, $primary }: ButtonProps) => {
  return <StyledButton $primary={$primary}>{text}</StyledButton>;
};

export default Button;
