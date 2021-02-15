import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "./card.css";
import Nature from "./Nature";
// import { Grid } from "@material-ui/core";
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
            <a href="#" className="cta">
              Buy
            </a>
          </div>
          
        </div>
    </Card>
  );
}
