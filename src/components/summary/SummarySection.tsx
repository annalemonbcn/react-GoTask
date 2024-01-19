import styled from "styled-components";
import TitleH2 from "../utils/titles/TitleH2";
import Progress from "../progress/Progress";
import SummaryItem from "./SummaryItem";

const SummarySectionWrapper = styled.section`
  padding: 10px 0;
`

const SummaryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const SummarySection = () => {
  return (
    <SummarySectionWrapper className="home-summary">
      <TitleH2>Summary</TitleH2>
      <SummaryWrapper className="home-summary-summary">
        <SummaryItem text="Assigned tasks" number={21} />
        <SummaryItem text="Completed tasks" number={31} />
      </SummaryWrapper>
      <Progress tasks={15} />
    </SummarySectionWrapper>
  );
};

export default SummarySection;
