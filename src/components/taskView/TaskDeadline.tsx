import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TitleH4 from "../utils/titles/TitleH4";

const TaskDeadlineWrapper = styled.div`
  margin-top: 20px;
`;

interface TaskDeadlineProps {
  deadline: Date;
}

const TaskDeadline = ({ deadline }: TaskDeadlineProps) => {
  const year = deadline.getFullYear();
  const month = (deadline.getMonth() + 1).toString().padStart(2, "0");
  const day = deadline.getDate().toString().padStart(2, "0");

  const formattedDeadline = `${year}-${month}-${day}`;

  const [value, setValue] = useState<Dayjs | null>(dayjs(formattedDeadline));

  return (
    <TaskDeadlineWrapper className="task-view-deadline">
      <TitleH4>Deadline</TitleH4>
      <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        className="task-view-datePicker"
        sx={{
          width: "100%",
          fontSize: "12px",
          marginTop: "10px",
        }}
      />
    </TaskDeadlineWrapper>
  );
};

export default TaskDeadline;
