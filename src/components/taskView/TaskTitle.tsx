import styled from "styled-components";
import { colors } from "../../theme";
import { useState } from "react";

const TaskTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors.borderGrey};
`;

const StyledTextarea = styled.textarea`
  color: ${colors.title};
  width: 100%;
  font-size: 1.5em;
  font-weight: 500;
  white-space: pre-wrap;
  margin: 0;
  border: 0;
  resize: none;
  overflow: hidden;
`;

interface TaskTitleProps {
  title: string;
}

const TaskTitle = ({ title }: TaskTitleProps) => {
  const [titleValue, setTitleValue] = useState(title);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <TaskTitleWrapper className="task-view-title">
      <StyledTextarea name="title" onChange={handleInputChange}>
        {titleValue}
      </StyledTextarea>
      <div style={{ fontSize: "12px" }}>
        <span style={{ color: `${colors.newTask}`, fontWeight: "600" }}>
          33
        </span>
        /45
      </div>
    </TaskTitleWrapper>
  );
};

export default TaskTitle;
