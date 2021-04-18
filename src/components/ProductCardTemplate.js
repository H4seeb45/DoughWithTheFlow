// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "../styles/card.css";
import Nature from "./Nature";
// import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
export default function ProductCard() {
  return (
    <Card>
      <div className="card transition">
       <div className="mt-2 transition">
       <Nature/>
       </div>
        <div className="cta-container transition">
          <h5>
          Chocolato
          <small><p>its delicious</p></small>
        </h5>
        </div>

        
        <div className="cta-container-btn transition">
          <Button
            className="cta focus:outline-none"
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
