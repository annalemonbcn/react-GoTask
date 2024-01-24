import styled from "styled-components";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { colors } from "../../../theme";

interface ButtonProps {
  text: string;
  $primary?: boolean;
  width?: string;
  onClick?: () => void;
}

interface StyledButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  $primary?: boolean;
  width?: string;
}

const StyledButton = styled.div<StyledButtonProps>`
  width: 100%;
  margin: 0 auto;
  padding: 12px 24px;
  color: ${(props) => (props.$primary ? "white" : "black")};
  background-color: ${(props) => (props.$primary ? colors.primary : "white")};

  font-size: 20px;
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  border: 0;

  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 400px;
    width: ${(props) => (props.width ? props.width : "auto")};
  }
`;

const Button = ({ text, $primary, width, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <StyledButton $primary={$primary} width={width} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
