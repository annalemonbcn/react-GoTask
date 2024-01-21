import styled from "styled-components";
import TitleH4 from "../titles/TitleH4";
import BasicSelector from "../BasicSelector";

const FormStatusWrapper = styled.div`
  margin-top: 20px;
`;


const FormStatus = () => {
  return (
    <FormStatusWrapper className="task-add-status">
      <TitleH4>Status</TitleH4>
      <BasicSelector />
    </FormStatusWrapper>
  );
};

export default FormStatus;
