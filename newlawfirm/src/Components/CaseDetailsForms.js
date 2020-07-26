import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CaseDetailsForms(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            onChange={(e) => {
              props.setFirstName(e.target.value);
            }}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            onChange={(e) => {
              props.setLastName(e.target.value);
            }}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="category"
            name="category"
            label="Category"
            onChange={(e) => {
              props.setCategory(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="opponent"
            name="opponent"
            label="Who are u up against"
            onChange={(e) => {
              props.setOpponent(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={(e) => {
              props.setCity(e.target.value);
            }}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            onChange={(e) => {
              props.setRegion(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            onChange={(e) => {
              props.setCountry(e.target.value);
            }}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <FormControlLabel*/}
        {/*    control={*/}
        {/*      <Checkbox color="secondary" name="saveAddress" value="yes" />*/}
        {/*    }*/}
        {/*    label="Use this address for payment details"*/}
        {/*  />*/}
        {/*</Grid>*/}
      </Grid>
    </React.Fragment>
  );
}
