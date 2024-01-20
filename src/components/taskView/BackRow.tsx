import styled from "styled-components";
import TitleH3 from "../utils/titles/TitleH3";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftOutlined";

const BackRowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin-top: 10px;
`;

const CustomTitleH3 = styled(TitleH3)`
  && {
    font-size: 18px;
    margin: 0;
  }
`;

interface BackRowProps {
  toggleDrawer: () => void;
}

const BackRow = ({ toggleDrawer }: BackRowProps) => {
  return (
    <BackRowWrapper onClick={toggleDrawer}>
      <ChevronLeftRoundedIcon />
      <CustomTitleH3>Tasks list</CustomTitleH3>
    </BackRowWrapper>
  );
};

export default BackRow;
