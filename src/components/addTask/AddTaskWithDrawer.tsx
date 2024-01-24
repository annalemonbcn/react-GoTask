import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { colors } from "../../theme";
import styled from "styled-components";
import DrawerView from "../../views/DrawerView";
import useScreenWidth from "../../hooks/useScreenWidth";
import Button from "../utils/buttons/Button";

const CircleAddTaskButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 3em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  cursor: pointer;
`;

const SquareAddTaskButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 5em;
  left: auto;
  right: 10em;
  z-index: 100;
  cursor: pointer;
`;

const AddTaskWithDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth < 1024 ? true : false;

  return (
    <>
      {isTabletScreen && (
        <CircleAddTaskButtonWrapper
          className="button-addTask"
          onClick={toggleDrawer}
        >
          <AddCircleIcon
            style={{
              fontSize: "3em",
              backgroundColor: "white",
              borderRadius: "100%",
            }}
            sx={{ color: `${colors.primary}` }}
          />
        </CircleAddTaskButtonWrapper>
      )}
      {!isTabletScreen && (
        <SquareAddTaskButtonWrapper
          className="button-addTask"
          onClick={toggleDrawer}
        >
          <Button text="Add task" $primary />
        </SquareAddTaskButtonWrapper>
      )}

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
          <DrawerView $addTask={true} toggleDrawer={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
};

export default AddTaskWithDrawer;
