import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
/*import CardActions from "@material-ui/core/CardActions";*/
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function TopCard() {
  const useStyles = makeStyles((theme) => ({
    // root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    details: {
      display: "flex",
      flexDirection: "row",
    },
    content: {
      display: "flex",
      flex: "1 0 auto",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ marginTop: 3 }}>
      <Card>
        <CardContent className={classes.content}>
          <Typography variant="h4">Products</Typography>
          <Grid container justify="flex-end">
            <Button
              onClick={handleClick}
              style={{ borderRadius: 20 }}
              align-content="flex-end"
              text-align="right"
              variant="contained"
              color="secondary"
            >
              Add Product
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Product Added Successfuly.
              </Alert>
            </Snackbar>
          </Grid>
        </CardContent>
        {/* <CardActions></CardActions> */}
      </Card>
    </div>
  );
}

export default TopCard;
