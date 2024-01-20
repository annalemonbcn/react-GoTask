import styled from "styled-components";
import TitleH4 from "../utils/titles/TitleH4";
import { colors } from "../../theme";

const TaskDeadlineWrapper = styled.div`
  margin-top: 20px;
`;
const TaskDateWrapper = styled.p`
  font-size: 12px;
  margin-top: 10px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${colors.borderGrey};
`;

interface TaskDeadlineProps {
  deadline: Date;
}

const TaskDeadline = ({ deadline }: TaskDeadlineProps) => {
  return (
    <TaskDeadlineWrapper>
      <TitleH4>Deadline</TitleH4>
      <TaskDateWrapper>{deadline.toLocaleDateString()}</TaskDateWrapper>
    </TaskDeadlineWrapper>
  );
};

export default TaskDeadline;
