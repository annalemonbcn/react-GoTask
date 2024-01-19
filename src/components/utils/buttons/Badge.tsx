import styled from "styled-components";
import { colors } from "../../../theme";

interface BadgeProps {
  text: string;
  $newTask?: boolean;
  $inProgress?: boolean;
  $completed?: boolean;
}

const StyledBadge = styled.div<BadgeProps>`
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 40px;

  color: ${(props) =>
    props.$newTask
      ? colors.newTask
      : props.$inProgress
      ? colors.inProgress
      : props.$completed
      ? colors.completed
      : colors.primary};

  background-color: ${colors.lightBlue};
`;

const Badge = ({ text, $newTask, $inProgress, $completed }: BadgeProps) => {
  return (
    <StyledBadge
      $newTask={$newTask}
      $inProgress={$inProgress}
      $completed={$completed}
    >
      {text}
    </StyledBadge>
  );
};

export default Badge