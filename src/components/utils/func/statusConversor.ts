const statusConversor = (status: string) =>
  status === "New task"
    ? "newTask"
    : status === "In progress"
    ? "inProgress"
    : status === "Completed"
    ? "completed"
    : status;

export default statusConversor;
