import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const BasicSelector = () => {
  const [statuesValue, setStatusValue] = useState("New task");

  const handleChange = (event: SelectChangeEvent) => {
    setStatusValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "10px" }}>
      <FormControl fullWidth required>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statuesValue}
          onChange={handleChange}
        >
          <MenuItem value="New task">New task</MenuItem>
          <MenuItem value="In progress">In progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelector;
