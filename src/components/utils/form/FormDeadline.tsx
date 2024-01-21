import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TitleH4 from "../titles/TitleH4";

const TaskDeadlineWrapper = styled.div`
  margin-top: 20px;
`;

const FormDeadline = () => {
  return (
    <TaskDeadlineWrapper className="task-add-deadline">
      <TitleH4>Deadline</TitleH4>
      <DatePicker sx={{ width: "100%", fontSize: "12px", marginTop: "10px" }} />
    </TaskDeadlineWrapper>
  );
};

export default FormDeadline;
