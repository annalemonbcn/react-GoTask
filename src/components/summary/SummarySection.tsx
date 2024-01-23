import styled from "styled-components";
import TitleH2 from "../utils/titles/TitleH2";
import Progress from "../progress/Progress";
import SummaryItem from "./SummaryItem";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useState } from "react";

const SummarySectionWrapper = styled.section`
  padding: 10px 0;
  margin: 12px auto;
`;

const SummaryTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const SummarySection = () => {
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
        <div className="animate__animated animate__fadeInDown" style={{ animationDuration: "0.4s"}}>
          <SummaryWrapper className="home-summary-summary">
            <SummaryItem text="Assigned tasks" number={21} />
            <SummaryItem text="Completed tasks" number={31} />
          </SummaryWrapper>
          <Progress tasks={15} />
        </div>
      )}
    </SummarySectionWrapper>
  );
};

export default SummarySection;
