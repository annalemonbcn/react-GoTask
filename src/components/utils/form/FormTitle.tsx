import styled from "styled-components";
import { colors } from "../../../theme";
import { useState, useEffect, useRef } from "react";

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

const FormTitle = () => {
  const [titleValue, setTitleValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <StyledFormTitle
      ref={textareaRef}
      className="task-add-title"
      name="title"
      value={titleValue}
      placeholder="New task title"
      onChange={handleInputChange}
    />
  );
};

export default FormTitle;
