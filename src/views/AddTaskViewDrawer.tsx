import styled from "styled-components";
import BackRow from "../components/taskView/BackRow";
import AddTaskView from "./AddTaskView";

const AddTaskViewDrawerWrapper = styled.div`
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 37.38%);
`;

interface AddTaskViewDrawerProps {
  toggleDrawer: () => void;
}

const AddTaskViewDrawer = ({ toggleDrawer }: AddTaskViewDrawerProps) => {
  return (
    <AddTaskViewDrawerWrapper className="task-drawer">
      <BackRow toggleDrawer={toggleDrawer} />
      <AddTaskView />
    </AddTaskViewDrawerWrapper>
  );
};

export default AddTaskViewDrawer;
