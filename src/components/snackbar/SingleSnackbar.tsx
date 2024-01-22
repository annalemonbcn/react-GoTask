import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface CustomSnackbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  onClose: () => void;
}

const CustomSnackbar = ({ open, setOpen, message, onClose }: CustomSnackbarProps) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <div>
        {message}
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </Snackbar>
  );
};

export default CustomSnackbar;
