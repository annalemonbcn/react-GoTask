import styled from "styled-components";
import BackRow from "../components/utils/BackRow";
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
  const renderContent = () => {
    if (task) {
      return <AddTaskView toggleDrawer={toggleDrawer} task={task} />;
    }

    if ($addTask) {
      return <AddTaskView toggleDrawer={toggleDrawer} $addTask />;
    }

    return null;
  };

  return (
    <DrawerWrapper className="task-drawer">
      <BackRow toggleDrawer={toggleDrawer} />
      {renderContent()}
    </DrawerWrapper>
  );
};

export default DrawerView;
