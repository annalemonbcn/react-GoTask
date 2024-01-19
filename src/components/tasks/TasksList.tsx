import styled from "styled-components";
import tasks from "../../data";
import Task from "./Task";

const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TasksList = () => {
  return (
    <TasksListWrapper>
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          description={task.description}
          limitDate={task.limitDate}
          status={task.status}
        />
      ))}
    </TasksListWrapper>
  );
};

export default TasksList;