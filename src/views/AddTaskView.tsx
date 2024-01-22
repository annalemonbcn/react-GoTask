import styled from "styled-components";
import FormTitle from "../components/utils/form/FormTitle";
import FormDescription from "../components/utils/form/FormDescription";
import FormStatus from "../components/utils/form/FormStatus";
import FormDeadline from "../components/utils/form/FormDeadline";
import Button from "../components/utils/buttons/Button";
import { useState, useContext } from "react";
// import CustomSnackbar from "../components/snackbar/SingleSnackbar";
import { TasksContext } from "../api/context/TasksProvider";
import { toast } from "sonner";

const FormWrapper = styled.form`
  margin-top: 30px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  padding: 24px 20px 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

interface AddTaskViewProps {
  toggleDrawer: () => void;
}

const AddTaskView = ({ toggleDrawer }: AddTaskViewProps) => {
  // Import context data
  const { contextTasks, setContextTasks } = useContext(TasksContext)!;

  // Form states
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [status, setStatus] = useState<string>("New task");

  const handleSubmit = () => {
    try {
      const newTask = {
        title,
        description,
        deadline,
        status,
        createdOn: new Date(),
      };
      console.log("newTask", newTask);

      // Add task to tasks array
      const newContextTasks = [...contextTasks, newTask];
      setContextTasks(newContextTasks);

      // Show snackbar message
      toast.success("Task added sucessfully");

      // Clean form
      setTitle("");
      setDescription("");
      setDeadline(null);
      setStatus("New task");

      // Toggle drawer
      setTimeout(() => {
        toggleDrawer();
      }, 2000);
    } catch (error) {
      toast.success("Error while adding a new task. Please try again");
      console.error("Error adding task:", error);
    }
  };

  return (
    <FormWrapper className="task-view" onSubmit={handleSubmit}>
      <FormTitle title={title} setTitle={setTitle} />
      <FormDescription
        description={description}
        setDescription={setDescription}
      />
      <FormDeadline setDeadline={setDeadline} />
      <FormStatus status={status} setStatus={setStatus} />
      <ButtonWrapper>
        <Button text="Add task" $primary onClick={handleSubmit} />
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default AddTaskView;
