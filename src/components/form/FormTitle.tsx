import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import { useEffect, useRef } from "react";

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

interface FormTitleProps {
  title: string;
  $addTask: boolean;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const FormTitle = ({ title, $addTask, setTitle }: FormTitleProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if ($addTask && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  return (
    <StyledFormTitle
      ref={textareaRef}
      className="task-add-title"
      name="title"
      value={title}
      placeholder="New task title"
      onChange={handleInputChange}
    />
  );
};

export default FormTitle;
