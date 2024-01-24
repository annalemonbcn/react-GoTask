import { useContext } from "react";
import { TasksContext } from "../api/context/TasksProvider";

const useFilteredTasks = (status: string) => {
  const { contextTasks } = useContext(TasksContext) || { contextTasks: [] };

  return status === "All"
    ? contextTasks
    : contextTasks.filter((task) => task.status === status);
};


export default useFilteredTasks

