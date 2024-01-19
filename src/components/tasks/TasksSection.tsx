import styled from "styled-components"
import TitleH2 from "../utils/titles/TitleH2"
import TasksList from "./TasksList"

const TasksSectionWrapper = styled.section`
  padding: 10px 0;
`

const TasksSection = () => {
  return (
    <TasksSectionWrapper className="home-tasks">
      <TitleH2>Tasks</TitleH2>
      <TasksList />
    </TasksSectionWrapper>
  )
}

export default TasksSection
