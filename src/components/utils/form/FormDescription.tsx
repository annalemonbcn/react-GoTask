import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { colors } from "../../../theme";
import TitleH4 from "../titles/TitleH4";

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

const FormDescription = () => {
  const [descriptionValue, setDescriptionValue] = useState("");

  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (descriptionTextareaRef.current) {
      descriptionTextareaRef.current.style.height = "auto";
      descriptionTextareaRef.current.style.height = `${
        descriptionTextareaRef.current.scrollHeight + 20
      }px`;
    }
  }, [descriptionTextareaRef]);

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValue(e.target.value);
  };

  return (
    <TaskDescriptionWrapper className="task-add-description">
      <TitleH4>Task description</TitleH4>
      <StyledFormDescription
        name="description"
        value={descriptionValue}
        onChange={handleDescriptionChange}
        placeholder="Here you can write a description of your task."
        ref={descriptionTextareaRef}
      />
    </TaskDescriptionWrapper>
  );
};

export default FormDescription;
