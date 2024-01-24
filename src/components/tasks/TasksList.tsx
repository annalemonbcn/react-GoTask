import React from "react";
import styled from "styled-components";
import TaskWithDrawer from "./TaskWithDrawer";
import useFilteredTasks from "../../hooks/useFilteredTasks";

const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

interface TasksListProps {
  status: string;
}

const TasksList = React.memo(({ status }: TasksListProps) => {
  const filteredTasks = useFilteredTasks(status);

  return (
    <TasksListWrapper>
      {filteredTasks.map((task) => {
        return <TaskWithDrawer key={task.id} task={task} />;
      })}
    </TasksListWrapper>
  );
});

export default TasksList;
