import styled from "styled-components";
import { colors } from "../../../theme";

interface ColorPalette {
  [status: string]: {
    color: string;
    softColor: string;
  };
}

const statusColors: ColorPalette = {
  newTask: {
    color: colors.newTask,
    softColor: colors.softNewTask,
  },
  inProgress: {
    color: colors.inProgress,
    softColor: colors.softInProgress,
  },
  completed: {
    color: colors.completed,
    softColor: colors.softCompleted,
  },
};

interface BadgeProps {
  text: string;
  status: string;
  taskView?: boolean;
}

interface StyledBadgeProps {
  status: string;
  taskView?: boolean;
}

const StyledBadge = styled.div<StyledBadgeProps>`
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 40px;

  color: ${(props) => statusColors[props.status]?.color || ""};
  background-color: ${(props) => statusColors[props.status]?.softColor || ""};

  margin-top: ${(props) => (props.taskView ? "10px" : "0")};
  display: ${(props) => (props.taskView ? "inline-block" : "block")};
`;

const Badge = ({ text, status, taskView }: BadgeProps) => {
  return (
    <StyledBadge status={status} taskView={taskView}>
      {text}
    </StyledBadge>
  );
};

export default Badge;
