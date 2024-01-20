import styled from "styled-components";
import TitleH4 from "../utils/titles/TitleH4";
import { colors } from "../../theme";
import { useRef, useEffect } from "react";

const TaskDescriptionWrapper = styled.div`
  margin-top: 20px;
`;

const StyledTextarea = styled.textarea`
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 20
      }px`;
    }
  }, [description]);

  return (
    <TaskDescriptionWrapper className="task-view-description">
      <TitleH4>Task description</TitleH4>
      <StyledTextarea ref={textareaRef} name="description">
        {description}
      </StyledTextarea>
    </TaskDescriptionWrapper>
  );
};

export default TaskDescription;
