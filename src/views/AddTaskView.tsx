import styled from "styled-components";
import FormTitle from "../components/utils/form/FormTitle";
import FormDescription from "../components/utils/form/FormDescription";
import FormStatus from "../components/utils/form/FormStatus";
import FormDeadline from "../components/utils/form/FormDeadline";

// TODO: change div for form
const AddTaskViewWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  padding: 24px 20px 20px;
`;

// TODO: add "Add task" button & add task to data array

const AddTaskView = () => {
  return (
    <AddTaskViewWrapper className="task-view">
      <FormTitle />
      <FormDescription />
      <FormDeadline />
      <FormStatus />
    </AddTaskViewWrapper>
  );
};

export default AddTaskView;
