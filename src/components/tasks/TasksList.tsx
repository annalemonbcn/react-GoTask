import styled from "styled-components";
import { TasksContext } from "../../api/context/TasksProvider";
import TaskWithDrawer from "./TaskWithDrawer";
import { useContext } from "react";

const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;

  @media(min-width: 768px){
    padding: 0 40px; 
  }
`;

interface TasksListProps {
  status: string;
}

const TasksList = ({ status }: TasksListProps) => {
  const { contextTasks } = useContext(TasksContext)!;

  const filteredTasks =
    status === "All"
      ? contextTasks
      : contextTasks.filter((task) => task.status === status);

  console.log("filteredTasks", filteredTasks);

  return (
    <TasksListWrapper>
      {filteredTasks.map((task, index) => {
        return <TaskWithDrawer key={index} task={task} />;
      })}
    </TasksListWrapper>
  );
};

export default TasksList;
