import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { colors } from "../../theme";

interface BasicSelectorProps {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const BasicSelector = ({ status, setStatus }: BasicSelectorProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: "10px" }}>
      <FormControl fullWidth required>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value="New task" sx={{ color: `${colors.newTask}` }}>
            New task
          </MenuItem>
          <MenuItem value="In progress" sx={{ color: `${colors.inProgress}` }}>
            In progress
          </MenuItem>
          <MenuItem value="Completed" sx={{ color: `${colors.completed}` }}>
            Completed
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelector;
