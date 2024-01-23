import styled from "styled-components";
import TitleH4 from "../utils/titles/TitleH4";
import BasicSelector from "../selector/BasicSelector";

const FormStatusWrapper = styled.div`
  margin-top: 20px;
`;

interface FormStatusProps {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const FormStatus = ({ status, setStatus }: FormStatusProps) => {
  return (
    <FormStatusWrapper className="task-add-status">
      <TitleH4>Status</TitleH4>
      <BasicSelector status={status} setStatus={setStatus} />
    </FormStatusWrapper>
  );
};

export default FormStatus;
