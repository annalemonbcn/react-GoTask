import { colors } from "../../../theme";

export const statusConversor = (status: string) =>
  status === "New task"
    ? "newTask"
    : status === "In progress"
    ? "inProgress"
    : status === "Completed"
    ? "completed"
    : status;

export const getColorValue = (statusValue: string): string => {
  return colors[statusValue] || "";
};

export const getSoftColorValue = (statusValue: string): string => {
  const softStatusValue = `soft${statusValue.charAt(0).toUpperCase()}${statusValue.slice(1)}`;
  return colors[softStatusValue] || "";
};
