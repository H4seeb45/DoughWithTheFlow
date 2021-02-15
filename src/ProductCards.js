import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "./card.css";
import Nature from "./Nature";
import { Grid } from "@material-ui/core";
export default function ProductCard() {
  return (
    <Card>
      <div className="flex-container">
        <div className="card transition">
        <Nature class="nature" />
          <h5 className="transition">
            Chocolato<br></br>
            <small>its delicious</small>
          </h5>
          <div className="cta-container transition">
            <a href="#" className="cta">
              Buy
            </a>
          </div>
          <div class="card_circle transition"></div>
        </div>
      </div>
    </Card>
  );
}
