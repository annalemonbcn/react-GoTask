import styled from "styled-components";
import { useEffect, useRef } from "react";
import { colors } from "../../theme";
import TitleH4 from "../utils/titles/TitleH4";

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

interface FormDescriptionProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const FormDescription = ({
  description,
  setDescription,
}: FormDescriptionProps) => {
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
    setDescription(e.target.value);
  };

  return (
    <TaskDescriptionWrapper className="task-add-description">
      <TitleH4>Task description</TitleH4>
      <StyledFormDescription
        name="description"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Here you can write a description of your task."
        ref={descriptionTextareaRef}
      />
    </TaskDescriptionWrapper>
  );
};

export default FormDescription;
