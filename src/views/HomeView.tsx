import styled from "styled-components";
import { colors } from "../theme";
import SummarySection from "../components/summary/SummarySection";
import TasksSection from "../components/tasks/TasksSection";
import AddTask from "../components/AddTask";

const HomeViewWrapper = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 100%);
  position: relative;
`;

const HomepageHeading = styled.div`
  margin-top: 20px;
`;

const HomeView = () => {
  const name = "Anna";

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
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
      <AddTask />
    </HomeViewWrapper>
  );
};

export default HomeView;
