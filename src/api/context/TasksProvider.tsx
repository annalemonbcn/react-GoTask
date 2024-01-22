import { createContext, ReactNode, useState, useEffect } from "react";
import { Task } from "../../../types";
import tasksData from "../../data";

interface TasksContextProps {
  contextTasks: Task[];
  setContextTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

// Create context
export const TasksContext = createContext<TasksContextProps | undefined>(
  undefined
);

interface TasksProviderProps {
  children: ReactNode;
}

const TasksProvider = (props: TasksProviderProps) => {
  const [contextTasks, setContextTasks] = useState<Task[]>(tasksData);

  useEffect(() => {
    console.log("contextTasks", contextTasks);
  }, [contextTasks]);

  // Provider value
  const tasksContextValue: TasksContextProps = {
    contextTasks,
    setContextTasks,
  };
  return (
    <TasksContext.Provider value={tasksContextValue}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
