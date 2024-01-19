import styled from "styled-components";
import StyledButton from "../components/utils/buttons/Button";
import TitleH1 from "../components/utils/titles/TitleH1";

const WelcomeViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #628ae4, white);
  text-align: center;
  padding: 20px;
`;

const TextWrapper = styled.div`
  position: relative;
  top: 60%;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const WelcomeView = () => {
  return (
    <WelcomeViewWrapper className="welcomeView">
      <TextWrapper>
        <TitleH1>Welcome to Go Task</TitleH1>
        <p>A workspace to increase your productivity.</p>
      </TextWrapper>
      <ButtonWrapper>
        <StyledButton text="Let's Start" $primary={true} />
      </ButtonWrapper>
    </WelcomeViewWrapper>
  );
};

export default WelcomeView;
