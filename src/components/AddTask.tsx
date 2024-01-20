import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";
import { colors } from "../theme";

const AddTaskWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 3em;
  left: 0;
`;

const AddTask = () => {
  return (
    <AddTaskWrapper>
      <AddCircleIcon
        style={{ fontSize: "3em" }}
        sx={{ color: `${colors.primary}` }}
      />
    </AddTaskWrapper>
  );
};

export default AddTask;
