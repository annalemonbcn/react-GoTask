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

  @media (min-width: 1024px){
    padding: ${padding.desktop}
  }
`;

const HomeView = () => {
  const { username } = useContext(UserContext)!;

  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      const formattedDate = today.toLocaleString("en-US", options);
      setCurrentDate(formattedDate);
    };

    // Actualizar la fecha cada segundo
    const intervalId = setInterval(updateDateTime, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HomeViewWrapper>
        <section className="home-heading">
          <p style={{ color: `${colors.grey}`, fontSize: "14px" }}>
            Hello, {username ? `${username} :)` : "user"}
          </p>
          <p style={{ fontWeight: "700", marginTop: "4px" }}>{currentDate}</p>
        </section>
        <SummarySection />
        <TasksSection />
        <AddTaskWithDrawer />
      </HomeViewWrapper>
      <Footer />
    </>
  );
};

export default HomeView;
