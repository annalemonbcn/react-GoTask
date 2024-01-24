import styled from "styled-components";
import { colors } from "../theme";

const StyledFooter = styled.footer`
  background-color: ${colors.lightBlue};
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;

  a {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        ©2023&nbsp;
        <a href="https://github.com/annalemonbcn">annalemonbcn</a>
      </p>
      <p>Web development from Barcelona.</p>
    </StyledFooter>
  );
};

export default Footer;
