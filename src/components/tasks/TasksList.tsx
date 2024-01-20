import styled from "styled-components";
import tasks from "../../data";
import TaskWithDrawer from "./TaskWithDrawer";

const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TasksList = () => {
  return (
    <TasksListWrapper>
      {tasks.map((task, index) => {
        return <TaskWithDrawer key={index} task={task} />;
      })}
    </TasksListWrapper>
  );
};

export default TasksList;
