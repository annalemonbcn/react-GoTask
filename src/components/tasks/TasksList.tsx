import styled from "styled-components";
// import tasksData from "../../data";
import { TasksContext } from "../../api/context/TasksProvider";
import TaskWithDrawer from "./TaskWithDrawer";
import { useContext } from "react";

const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TasksList = () => {
  const { contextTasks } = useContext(TasksContext)!;

  return (
    <TasksListWrapper>
      {contextTasks.map((task, index) => {
        return <TaskWithDrawer key={index} task={task} />;
      })}
    </TasksListWrapper>
  );
};

export default TasksList;
