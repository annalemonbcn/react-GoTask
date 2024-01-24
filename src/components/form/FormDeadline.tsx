import React, { useEffect } from "react";
import styled from "styled-components";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TitleH4 from "../utils/titles/TitleH4";
import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import { dateToStringFormatter } from "../utils/func/dateFormatter";

const TaskDeadlineWrapper = styled.div`
  margin-top: 20px;
`;

interface FormDeadlineProps {
  setDeadline: React.Dispatch<React.SetStateAction<Date | null>>;
}

const FormDeadline = ({ setDeadline }: FormDeadlineProps) => {
  const today = new Date();

  const formattedDeadline = dateToStringFormatter(today);

  const [date, setDate] = useState<Dayjs | null>(dayjs(formattedDeadline));

  const handleDateChange = (newDate: Dayjs | null) => {
    setDate(newDate);
  };

  useEffect(() => {
    if (date !== undefined) {
      setDeadline(
        (prevDeadline: Date | null) => date?.toDate() || prevDeadline
      );
    }
  }, [date]);

  return (
    <TaskDeadlineWrapper className="task-add-deadline">
      <TitleH4>Deadline</TitleH4>
      <DatePicker
        value={date}
        onChange={handleDateChange}
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

export default FormDeadline;
