import styled from "styled-components";
import { Task } from "../../types";
import TaskTitle from "../components/taskView/TaskTitle";
import TaskDescription from "../components/taskView/TaskDescription";
import TaskDeadline from "../components/taskView/TaskDeadline";
import TaskStatus from "../components/taskView/TaskStatus";

const TaskViewWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
  padding: 24px 20px 20px;
`;

interface TaskViewProps {
  task: Task;
}

const TaskView = ({ task }: TaskViewProps) => {
  return (
    <TaskViewWrapper className="task-view">
      <TaskTitle title={task.title} />
      <TaskDescription description={task.description} />
      <TaskDeadline deadline={task.deadline} />
      <TaskStatus status={task.status} />
    </TaskViewWrapper>
  );
};

export default TaskView;
