import {
  Snackbar,
  Alert
} from '@mui/material'

const Toasty = ({ open, onClose }) => {
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
      message="alert"
      action={
        <>
          <Alert elevation={6} variant="filled" severity="success" />
        </>
      }
      />
  )
}

export default Toasty;