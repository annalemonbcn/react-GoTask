import styled from "styled-components";
import BackRow from "../components/taskView/BackRow";
import { Task } from "../../types";
import AddTaskView from "./AddTaskView";

const DrawerWrapper = styled.div`
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 37.38%);
`;

interface DrawerViewProps {
  task?: Task;
  $addTask?: boolean;
  toggleDrawer: () => void;
}

const DrawerView = ({ task, $addTask, toggleDrawer }: DrawerViewProps) => {
  return (
    <DrawerWrapper className="task-drawer">
      <BackRow toggleDrawer={toggleDrawer} />
      {task && <AddTaskView toggleDrawer={toggleDrawer} task={task} />}
      {$addTask && <AddTaskView toggleDrawer={toggleDrawer} $addTask />}
    </DrawerWrapper>
  );
};

export default DrawerView;
