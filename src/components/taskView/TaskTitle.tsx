import styled from "styled-components";
import { colors } from "../../theme";
import { useState } from "react";

const StyledFormTitle = styled.textarea`
  color: ${colors.title};
  width: 100%;
  font-size: 1.5em;
  font-weight: 500;
  white-space: pre-wrap;
  margin: 0;
  border: 0;
  resize: none;
  overflow: hidden;

  border-bottom: 1px solid ${colors.borderGrey};
`;

interface TaskTitleProps {
  title: string;
}

const TaskTitle = ({ title }: TaskTitleProps) => {
  const [titleValue, setTitleValue] = useState(title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <StyledFormTitle
      className="task-View-title"
      name="title"
      value={titleValue}
      onChange={handleTitleChange}
    />
  );
};

export default TaskTitle;
