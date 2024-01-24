import { useState } from "react";
import { Box, Drawer } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { colors } from "../../theme";
import styled from "styled-components";
import DrawerView from "../../views/DrawerView";
import useScreenWidth from "../../hooks/useScreenWidth";
import Button from "../utils/buttons/Button";

interface StyledWrapperProps {
  $isTablet: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: ${({ $isTablet }) => ($isTablet ? "3em" : "5em")};
  left: ${({ $isTablet }) => ($isTablet ? "50%" : "auto")};
  right: ${({ $isTablet }) => ($isTablet ? "auto" : "10em")};
  transform: ${({ $isTablet }) => ($isTablet ? "translateX(-50%)" : "none")};
  z-index: 100;
  cursor: pointer;
`;

const AddTaskWithDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth < 1024 ? true : false;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <StyledWrapper
        className="button-addTask"
        $isTablet={isTabletScreen}
        onClick={toggleDrawer}
      >
        {isTabletScreen ? (
          <AddCircleIcon
            style={{
              fontSize: "3em",
              backgroundColor: "white",
              borderRadius: "100%",
            }}
            sx={{ color: `${colors.primary}` }}
          />
        ) : (
          <Button text="Add task" $primary />
        )}
      </StyledWrapper>

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
