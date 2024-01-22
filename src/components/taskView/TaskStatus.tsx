import styled from "styled-components";
import TitleH4 from "../utils/titles/TitleH4";
import Badge from "../utils/buttons/Badge";
import statusConversor from "../utils/func/statusConversor";

const TaskStatusWrapper = styled.div`
  margin-top: 20px;
`;

interface TaskStatusProps {
  status: string;
}

const TaskStatus = ({ status }: TaskStatusProps) => {
  const statusValue = statusConversor(status);

  return (
    <TaskStatusWrapper className="task-view-status">
      <TitleH4>Status</TitleH4>
      <Badge text={status} status={statusValue} taskView />
    </TaskStatusWrapper>
  );
};

export default TaskStatus;
