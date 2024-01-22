import styled from "styled-components";
import FormTitle from "../components/utils/form/FormTitle";
import FormDescription from "../components/utils/form/FormDescription";
import FormStatus from "../components/utils/form/FormStatus";
import FormDeadline from "../components/utils/form/FormDeadline";
import Button from "../components/utils/buttons/Button";
import { useState, useContext } from "react";
import { TasksContext } from "../api/context/TasksProvider";
import { toast } from "sonner";
import { Task } from "../../types";

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

const DeleteStyled = styled.p`
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
`;

interface AddTaskViewProps {
  task?: Task;
  toggleDrawer: () => void;
  $addTask?: boolean;
}

const AddTaskView = ({ task, toggleDrawer, $addTask }: AddTaskViewProps) => {
  // Import context data
  const { contextTasks, setContextTasks } = useContext(TasksContext)!;

  // Form states
  const [title, setTitle] = useState<string>(task ? task.title : "");
  const [description, setDescription] = useState<string>(
    task ? task.description : ""
  );
  const [deadline, setDeadline] = useState<Date | null>(
    task ? task.deadline : null
  );
  const [status, setStatus] = useState<string>(task ? task.status : "New task");

  const handleAddTask = () => {
    try {
      // New task object
      const newTask = {
        id: contextTasks.length + 1,
        title,
        description,
        deadline,
        status,
        createdOn: new Date(),
      };

      // Add task to tasks array
      const newContextTasks = [...contextTasks, newTask];
      setContextTasks(newContextTasks);

      // Show toast
      toast.success("Task added sucessfully");

      // Clean form
      setTitle("");
      setDescription("");
      setDeadline(null);
      setStatus("New task");

      // Toggle drawer after countdown
      setTimeout(() => {
        toggleDrawer();
      }, 2000);
    } catch (error) {
      toast.error("Error while adding a new task. Please try again");
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = (taskId: number | undefined) => {
    console.log("update task");
    try {
      // Find the task to update
      const taskToUpdate = contextTasks.find((task) => task.id === taskId);
      // Task obj with new info
      let updatedTask: Task;
      if (taskToUpdate) {
        updatedTask = {
          ...taskToUpdate,
          title: title,
          description: description,
          deadline: deadline,
          status: status,
        };
      }

      // contextTasks with the new updatedTask
      const updatedTasksList = contextTasks.map((task) =>
        task.id === taskId ? updatedTask : task
      );
      // Update contextTasks
      setContextTasks(updatedTasksList);

      // Show toast
      toast.success("Task updated sucessfully");
    } catch (error) {
      toast.error("Error while updating the task. Please try again");
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = (taskId: number | undefined) => {
    try {
      // Filter contextTasks to delete the task
      const updatedTasks = contextTasks.filter((task) => task.id !== taskId);
      // Update contextTasks
      setContextTasks(updatedTasks);

      // Show toast
      toast.success("Task deleted sucessfully");

      // Toggle drawer
      toggleDrawer();
    } catch (error) {
      toast.error("Error while deleting the task. Please try again");
      console.error("Error deleting task:", error);
    }
  };

  return (
    <FormWrapper className="task-view">
      <FormTitle title={title} setTitle={setTitle} $addTask={$addTask ? true : false} />
      <FormDescription
        description={description}
        setDescription={setDescription}
      />
      <FormDeadline setDeadline={setDeadline} />
      <FormStatus status={status} setStatus={setStatus} />
      <ButtonWrapper>
        {$addTask ? (
          <Button text="Add task" $primary onClick={handleAddTask} />
        ) : (
          <>
            <Button
              text="Update task"
              $primary
              onClick={() => handleUpdateTask(task?.id)}
            />
            <DeleteStyled onClick={() => handleDeleteTask(task?.id)}>
              Delete
            </DeleteStyled>
          </>
        )}
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default AddTaskView;
