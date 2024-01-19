import styled from "styled-components";
import { colors } from "../../theme";
import { CSSProperties } from "react";
import TitleH3 from "../utils/titles/TitleH3";
import Badge from "../utils/buttons/Badge";

const TaskWrapper = styled.div`
  padding: 12px;
  border: 1px solid ${colors.borderGrey};
  border-radius: 12px;
`;

const Description = styled.p<CSSProperties>`
  color: ${colors.grey};
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

const TaskInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

interface TaskProps {
  title: string;
  description: string;
  limitDate: Date;
  status: string;
}

const Task = ({ title, description, limitDate, status }: TaskProps) => {
  return (
    <TaskWrapper>
      <TitleH3>{title}</TitleH3>
      <Description>{description}</Description>
      <TaskInfoWrapper>
        <p>Date</p>
        <Badge text={status} />
      </TaskInfoWrapper>
    </TaskWrapper>
  );
};

export default Task;
