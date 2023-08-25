import {
  Snackbar,
  Alert
} from '@mui/material'

const Toasty = ({ open, severity, message, onClose }) => {
  const handleClose = (event, reason) =>{
    if(reason === "clickaway") {
      return
    }

    onClose();
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical:"bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      >
        <Alert elevation={6} variant="filled" severity={severity}>
          {message}
        </Alert>
      </Snackbar>
  )
}

export default Toasty;