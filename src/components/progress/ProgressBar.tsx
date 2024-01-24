import { Box } from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

const LinearProgressWithLabel = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            borderRadius: "10px",
            backgroundColor: "#d7d7d7",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "white",
            },
          }}
          {...props}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <p>{`${Math.round(props.value)}%`}</p>
      </Box>
    </Box>
  );
};

interface ProgresBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgresBarProps) => {
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};

export default ProgressBar;
