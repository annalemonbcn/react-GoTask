import styled from "styled-components";
import { colors } from "../theme";
import SummarySection from "../components/summary/SummarySection";
import TasksSection from "../components/tasks/TasksSection";
import AddTaskWithDrawer from "../components/addTask/AddTaskWithDrawer";
import Footer from "../components/Footer";

import { useContext } from "react";
import { UserContext } from "../api/context/UserProvider";

const HomeViewWrapper = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 100%);
  position: relative;
`;

const HomeView = () => {
  const { username } = useContext(UserContext)!;

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const currentDate = today.toLocaleString("en-US", options);

  return (
    <>
      <HomeViewWrapper>
        <div className="home-heading">
          <p style={{ color: `${colors.grey}`, fontSize: "14px" }}>
            Hello, {username ? `${username} :)` : "user"}
          </p>
          <p style={{ fontWeight: "700", marginTop: "4px" }}>{currentDate}</p>
        </div>
        <SummarySection />
        <TasksSection />
        <AddTaskWithDrawer />
      </HomeViewWrapper>
      <Footer />
    </>
  );
};

export default HomeView;
