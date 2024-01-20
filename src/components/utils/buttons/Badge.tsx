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

const StyledBadge = styled.div<BadgeProps>`
  font-size: 12px;
  font-weight: 600;

  padding: 6px 10px;
  border-radius: 40px;

  color: ${(props) => statusColors[props.status]?.color || ""};
  background-color: ${(props) => statusColors[props.status]?.softColor || ""};
`;

interface BadgeProps {
  text: string;
  status: string;
}

const Badge = ({ text, status }: BadgeProps) => {
  return (
    <StyledBadge status={status} text={text}>
      {text}
    </StyledBadge>
  );
};

export default Badge;
