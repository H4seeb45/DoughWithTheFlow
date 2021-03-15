import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
/*import CardActions from "@material-ui/core/CardActions";*/
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function TopCard() {
  const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: "flex"
    // },
    details: {
      display: "flex",
      flexDirection: "row"
    },
    content: {
      display: "flex",
      flex: "1 0 auto"
    }
  }));
  const classes = useStyles();

  return (
    <div style={{ marginTop: 3 }}>
      <Card>
        <CardContent className={classes.content}>
          <Typography variant="h4">Products</Typography>
          <Grid container justify="flex-end">
            <Button
              style={{ borderRadius: 20 }}
              align-content="flex-end"
              text-align="right"
              variant="contained"
              color="secondary"
            >
              Add Product
            </Button>
          </Grid>
        </CardContent>
        {/* <CardActions></CardActions> */}
      </Card>
    </div>
  );
}
export default TopCard;
