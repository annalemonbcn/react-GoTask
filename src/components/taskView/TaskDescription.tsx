import styled from "styled-components";
import TitleH4 from "../utils/titles/TitleH4";
import { useState, useRef, useEffect } from "react";
import { colors } from "../../theme";

const TaskDescriptionWrapper = styled.div`
  margin-top: 20px;
`;

const StyledFormDescription = styled.textarea`
  width: 100%;
  font-size: 12px;
  padding: 12px;
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid ${colors.borderGrey};
  resize: none;
  overflow: hidden;
`;

interface TaskDescriptionProps {
  description: string;
}

const TaskDescription = ({ description }: TaskDescriptionProps) => {
  const [descriptionValue, setDescriptionValue] = useState(description);

  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (descriptionTextareaRef.current) {
      descriptionTextareaRef.current.style.height = "auto";
      descriptionTextareaRef.current.style.height = `${
        descriptionTextareaRef.current.scrollHeight + 20
      }px`;
    }
  }, [descriptionValue]);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValue(e.target.value);
  };

  return (
    <TaskDescriptionWrapper className="task-view-description">
      <TitleH4>Task description</TitleH4>
      <StyledFormDescription
        name="description"
        value={descriptionValue}
        onChange={handleDescriptionChange}
        ref={descriptionTextareaRef}
      />
    </TaskDescriptionWrapper>
  );
};

export default TaskDescription;