import styled from "styled-components";
import Back from "../components/taskView/Back";
import { Task } from "../../types";
import TaskView from "./TaskView";

const TaskDrawerWrapper = styled.div`
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 37.38%);
`;

interface TaskDrawerProps {
  task: Task;
  toggleDrawer: () => void;
}

const TaskDrawer = ({ task, toggleDrawer }: TaskDrawerProps) => {
  return (
    <TaskDrawerWrapper className="task-drawer">
      <Back toggleDrawer={toggleDrawer} />
      <TaskView task={task} />
    </TaskDrawerWrapper>
  );
};

export default TaskDrawer;
