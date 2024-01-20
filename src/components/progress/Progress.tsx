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
  tasks: number;
}

const Progress = ({ tasks }: ProgressProps) => {
  return (
    <ProgressWrapper className="home-summary-progress">
      <div style={{ fontSize: "20px" }}>Progress summary</div>
      <p>
        {tasks} {tasks > 1 ? "tasks" : "task"}
      </p>
      <ProgressBar progress={10} />
    </ProgressWrapper>
  );
};

export default Progress;
