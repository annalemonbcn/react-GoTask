import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const ProgressWrapper = styled.div`
  background: linear-gradient(to bottom right, #7dbee9, #5e87e3);
  color: white;

  margin-top: 16px;
  padding: 20px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface ProgressProps {
  totalTasks: number;
  completedTasks: number;
}

const Progress = ({ totalTasks, completedTasks }: ProgressProps) => {

  const progress = (completedTasks / totalTasks) * 100;

  return (
    <ProgressWrapper className="home-summary-progress">
      <div style={{ fontSize: "20px" }}>Progress summary</div>
      <p>
        {totalTasks} {totalTasks > 1 ? "tasks" : "task"}
      </p>
      <ProgressBar progress={progress} />
    </ProgressWrapper>
  );
};

export default Progress;
