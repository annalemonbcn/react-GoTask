import styled from "styled-components";
import TitleH3 from "../utils/titles/TitleH3";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftOutlined";

const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
`;

const CustomTitleH3 = styled(TitleH3)`
  && {
    font-size: 18px;
    margin: 0;
  }
`;

interface BackProps {
  toggleDrawer: () => void;
}

const Back = ({ toggleDrawer }: BackProps) => {
  return (
    <BackWrapper onClick={toggleDrawer}>
      <ChevronLeftRoundedIcon />
      <CustomTitleH3>Tasks list</CustomTitleH3>
    </BackWrapper>
  );
};

export default Back;
