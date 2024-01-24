import styled from "styled-components";
import { colors, padding } from "../theme";

import SummarySection from "../components/summary/SummarySection";
import TasksSection from "../components/tasks/TasksSection";
import AddTaskWithDrawer from "../components/addTask/AddTaskWithDrawer";
import Footer from "../components/Footer";

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../api/context/UserProvider";

const HomeViewWrapper = styled.div`
  padding: ${padding.mobile};
  background: linear-gradient(180deg, #fff 0%, #dfe4f1 100%);
  position: relative;

  @media (min-width: 768px) {
    padding: ${padding.tablet};
  }

  @media (min-width: 1024px) {
    padding: ${padding.desktop};
  }
`;

const HomeHeading = styled.section`
  color: ${colors.grey};
  font-size: 14px;
`;

const HomeUsername = styled.p`
  font-weight: 700;
  margin-top: 4px;
`;

const HomeView = () => {
  const { username } = useContext(UserContext)!;
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const getDate = () => {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
      };
      return today.toLocaleString("en-US", options);
    };
    setCurrentDate(getDate());
  }, []);

  return (
    <>
      <HomeViewWrapper>
        <HomeHeading className="home-heading">
          <p style={{ color: colors.grey, fontSize: "14px" }}>
            Hello, {username ? `${username} :)` : "user"}
          </p>
          <HomeUsername>{currentDate}</HomeUsername>
        </HomeHeading>
        <SummarySection />
        <TasksSection />
        <AddTaskWithDrawer />
      </HomeViewWrapper>
      <Footer />
    </>
  );
};

export default HomeView;
