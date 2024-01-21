import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { colors } from "../../theme";
import styled from "styled-components";
import AddTaskViewDrawer from "../../views/AddTaskViewDrawer";

const AddTaskButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 3em;
  left: 0;
  z-index: 100;
`;

const AddTaskWithDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AddTaskButtonWrapper className="button-addTask" onClick={toggleDrawer}>
        <AddCircleIcon
          style={{ fontSize: "3em" }}
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
          <AddTaskViewDrawer toggleDrawer={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
};

export default AddTaskWithDrawer;
