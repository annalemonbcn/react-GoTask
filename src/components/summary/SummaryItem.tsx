import styled from "styled-components";
import { colors } from "../../theme";

const SummaryEl = styled.div`
  padding: 12px;
  width: 50%;
  border: 1px solid ${colors.borderGrey};
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface SummaryItemProps {
  text: string;
  number: number;
}

const SummaryItem = ({ text, number }: SummaryItemProps) => {
  return (
    <SummaryEl>
      <p style={{ color: `${colors.grey}`, fontSize: "14px" }}>{text}</p>
      <p style={{ fontSize: "24px", fontWeight: "700" }}>{number}</p>
    </SummaryEl>
  );
};

export default SummaryItem;
