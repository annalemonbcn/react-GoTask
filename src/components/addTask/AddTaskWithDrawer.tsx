import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { colors } from "../../theme";
import styled from "styled-components";
import DrawerView from "../../views/DrawerView";
import useIsMobile from "../../hooks/useIsMobile";

const AddTaskButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 3em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const AddTaskWithDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobileScreen = useIsMobile();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AddTaskButtonWrapper className="button-addTask" onClick={toggleDrawer}>
        <AddCircleIcon
          style={{
            fontSize: "3em",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
          sx={{ color: `${colors.primary}` }}
        />
      </AddTaskButtonWrapper>

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
