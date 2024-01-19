import styled from "styled-components";
import { colors } from "../theme";
import SummarySection from "../components/summary/SummarySection";
import TasksSection from "../components/tasks/TasksSection";

const HomeViewWrapper = styled.div`
  padding: 20px;
`;

const HomepageHeading = styled.div`
  margin-top: 20px;
`;

const HomeView = () => {
  const name = "Anna";

  const today = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const currentDate = today.toLocaleString("en-US", options);

  return (
    <HomeViewWrapper>
      <HomepageHeading className="home-heading">
        <p style={{ color: `${colors.grey}`, fontSize: "14px" }}>
          Good morning, {name}
        </p>
        <p style={{ fontWeight: "700", marginTop: "4px" }}>{currentDate}</p>
      </HomepageHeading>
      <SummarySection />
      <TasksSection />
    </HomeViewWrapper>
  );
};

export default HomeView;
