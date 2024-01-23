import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

import { useState, useEffect } from "react";
import TasksList from "./tasks/TasksList";

import { colors } from "../theme";

const CustomStyledBox = styled(Box)`
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 80px;
  }

  @media (min-width: 1024px) {
    padding: 0 240px;
  }
`;
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  status: string;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { value, index, status, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <TasksList status={status} />}
    </div>
  );
};

const BasicTabs = () => {
  const [value, setValue] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileScreen = screenWidth < 768;

  const tabStyles = {
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "80px",
    padding: "8px 16px",
    minHeight: "auto",
    height: "auto",
    borderColor: "transparent",
  };

  return (
    <>
      <CustomStyledBox>
        <Tabs
          value={value}
          variant={isMobileScreen ? "scrollable" : "standard"}
          allowScrollButtonsMobile
          centered={isMobileScreen ? false : true}
          onChange={handleChange}
          aria-label="basic tabs"
          sx={{
            backgroundColor: "white",
            borderRadius: "42px",
            padding: "6px",
            border: 1,
            borderColor: `${colors.borderGrey}`,
          }}
        >
          <Tab label="All" sx={tabStyles} />
          <Tab label="New tasks" sx={tabStyles} />
          <Tab label="In progress" sx={tabStyles} />
          <Tab label="Completed" sx={tabStyles} />
        </Tabs>
      </CustomStyledBox>
      <CustomTabPanel value={value} index={0} status={"All"} />
      <CustomTabPanel value={value} index={1} status={"New task"} />
      <CustomTabPanel value={value} index={2} status={"In progress"} />
      <CustomTabPanel value={value} index={3} status={"Completed"} />
    </>
  );
};

export default BasicTabs;
