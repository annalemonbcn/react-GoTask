import { useState, CSSProperties } from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import TitleH3 from "../utils/titles/TitleH3";
import Badge from "../utils/buttons/Badge";
import DrawerView from "../../views/DrawerView";
import type { Task } from "../../../types";
import { Box, Drawer } from "@mui/material";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { statusConversor } from "../utils/func/statusUtils";

const TaskWrapper = styled.div`
  background-color: white;
  padding: 12px;
  border: 1px solid ${colors.borderGrey};
  border-radius: 12px;

  @media(min-width: 768px){
    padding: 16px 24px;
  }
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

const TaskDate = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

interface TaskWithDrawerProps {
  task: Task;
}

const TaskWithDrawer = ({ task }: TaskWithDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const statusValue = statusConversor(task.status);

  return (
    <>
      <TaskWrapper className="task" onClick={toggleDrawer}>
        <TitleH3>{task.title}</TitleH3>
        <Description>{task.description}</Description>
        <TaskInfoWrapper>
          <TaskDate>
            <TimerOutlinedIcon style={{ fontSize: 12 }} />
            {task.deadline && task.deadline.toLocaleDateString()}
          </TaskDate>
          <Badge text={task.status} status={statusValue} />
        </TaskInfoWrapper>
      </TaskWrapper>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: "100dvw",
            minHeight: "92dvh",
          }}
        >
          <DrawerView task={task} toggleDrawer={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
};

export default TaskWithDrawer;
