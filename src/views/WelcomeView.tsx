import styled from "styled-components";
import StyledButton from "../components/utils/buttons/Button";
import TitleH1 from "../components/utils/titles/TitleH1";
import welcome from "../images/welcome.png";
import { colors } from "../theme";
import { useRef, useEffect } from "react";

const WelcomeViewWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #628ae4, white);
  text-align: center;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  margin-top: 30px;
`;

const TextWrapper = styled.div`
  margin-top: 30px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: calc(100% - 40px);
`;

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 8px;
  padding: 12px 24px;
  border-width: 1px;
  border-color: 1px solid ${colors.borderGrey};
`;

const WelcomeView = () => {
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <WelcomeViewWrapper className="welcomeView">
      <ImageWrapper className="animate__animated animate__fadeInDown">
        <img src={welcome} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <TitleH1 className="animate__animated animate__fadeInDown">
          Welcome to Go Task
        </TitleH1>
        <p
          className="animate__animated animate__fadeInDown"
          style={{ marginTop: "10px" }}
        >
          A workspace to increase your productivity.
        </p>
      </TextWrapper>
      <ButtonWrapper className="animate__animated animate__fadeInDown">
        <StyledInput type="text" placeholder="Your name" ref={inputRef} />
        <StyledButton text="Let's Start" $primary={true} to="/tasks" />
      </ButtonWrapper>
    </WelcomeViewWrapper>
  );
};

export default WelcomeView;
