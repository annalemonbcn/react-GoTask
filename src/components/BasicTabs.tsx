import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";

import { useState } from "react";
import TasksList from "./tasks/TasksList";

import { colors } from "../theme";
import useScreenWidth from "../hooks/useScreenWidth";

const CustomStyledBox = styled(Box)`
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 80px;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

const StyledTabs = styled(Tabs)`
  background-color: white;
  border-radius: 42px;
  padding: 6px;
  border: 1px solid ${colors.borderGrey};
`;

const tabStyles = {
  fontSize: "14px",
  fontWeight: "500",
  borderRadius: "80px",
  padding: "8px 16px",
  minHeight: "auto",
  height: "auto",
  borderColor: "transparent",
};

const tabsData = [
  { label: "All", status: "All" },
  { label: "New tasks", status: "New task" },
  { label: "In progress", status: "In progress" },
  { label: "Completed", status: "Completed" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

const BasicTabs = () => {
  const [value, setValue] = useState(0);

  const screenWidth = useScreenWidth();
  const isMobileScreen = screenWidth < 768 ? true : false;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomStyledBox>
        <StyledTabs
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
          {tabsData.map((tab, index) => (
            <Tab key={index} label={tab.label} sx={tabStyles} />
          ))}
        </StyledTabs>
      </CustomStyledBox>
      {tabsData.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <TasksList status={tab.status} />
        </CustomTabPanel>
      ))}
    </>
  );
};

export default BasicTabs;
