import styled from "styled-components";

import TitleH2 from "../utils/titles/TitleH2";
import Progress from "../progress/Progress";
import SummaryItem from "./SummaryItem";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import { useState, useContext } from "react";

import { TasksContext } from "../../api/context/TasksProvider";

const SummarySectionWrapper = styled.section`
  padding: 10px 0;
  margin: 12px auto;
`;

const SummaryTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: start;
    gap: 20px;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const AnimatedContent = styled.div`
  &.animate__animated {
    animation-duration: 0.4s;
    animation-name: fadeInDown;
    margin-top: 15px;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const SummarySection = () => {
  const { contextTasks } = useContext(TasksContext)!;
  const totalTasks = contextTasks.length;
  const completedTasks = contextTasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const [openContent, setOpenContent] = useState(true);

  const handleOpenContent = () => {
    setOpenContent(!openContent);
  };

  return (
    <SummarySectionWrapper className="home-summary">
      <SummaryTitleWrapper onClick={handleOpenContent}>
        <TitleH2>Summary</TitleH2>
        <ExpandMoreRoundedIcon />
      </SummaryTitleWrapper>
      {openContent && (
        <AnimatedContent className="animate__animated fadeInDown">
          <SummaryWrapper className="home-summary-summary">
            <SummaryItem text="Total tasks" number={totalTasks} />
            <SummaryItem text="Completed tasks" number={completedTasks} />
          </SummaryWrapper>
          <Progress totalTasks={totalTasks} completedTasks={completedTasks} />
        </AnimatedContent>
      )}
    </SummarySectionWrapper>
  );
};

export default SummarySection;
