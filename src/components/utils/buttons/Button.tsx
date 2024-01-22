import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { colors } from "../../../theme";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  $primary?: boolean;
  to?: string;
  onClick?: () => void;
}

interface StyledButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $primary?: boolean;
}

const StyledButton = styled.div<StyledButtonProps>`
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

const Button = ({ text, $primary, to, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return to ? (
    <StyledButton $primary={$primary}>
      <Link to={to}>{text}</Link>
    </StyledButton>
  ) : (
    <StyledButton $primary={$primary} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
