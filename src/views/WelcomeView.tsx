import styled from "styled-components";
import StyledButton from "../components/utils/buttons/Button";
import TitleH1 from "../components/utils/titles/TitleH1";
import welcome from "../images/welcome.png";

const WelcomeViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #628ae4, white);
  text-align: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  margin-top: 20%;
`;

const TextWrapper = styled.div`
  margin-top: 8rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const WelcomeView = () => {
  return (
    <WelcomeViewWrapper className="welcomeView">
      <ImageWrapper>
        <img src={welcome} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <TitleH1>Welcome to Go Task</TitleH1>
        <p>A workspace to increase your productivity.</p>
      </TextWrapper>
      <ButtonWrapper>
        <StyledButton text="Let's Start" $primary={true} to="/tasks" />
      </ButtonWrapper>
    </WelcomeViewWrapper>
  );
};

export default WelcomeView;
