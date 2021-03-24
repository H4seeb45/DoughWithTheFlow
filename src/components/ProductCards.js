// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "../styles/card.css";
import Nature from "../components/Nature";
// import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
export default function ProductCard() {
  return (
    <Card>
      <div className="card transition">
        <div className="cta-container transition">
          <Nature />
        </div>

        <h5 className="cta-container">
          Chocolato<br></br>
          <small>its delicious</small>
        </h5>
        <div className="cta-container-btn transition">
          <Button
            className="cta"
            color="secondary"
            variant="contained"
            style={{ borderRadius: 25 }}
          >
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
}