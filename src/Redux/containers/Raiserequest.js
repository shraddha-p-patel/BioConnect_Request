import React, { useState } from "react";
import { Container, Grid, Typography, Box, Button, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { tabChange } from "../actions/requestAction";
import { useDispatch, useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const Raiserequest = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const requestBtnHandler = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/form");
  };

  const handleProductQuery = () => {
    dispatch(tabChange(0));
    navigate("./form");
  };

  const handleSampleRequest = () => {
    dispatch(tabChange(1));
    navigate("./form");
  };

  const handleSetupMeeting = () => {
    dispatch(tabChange(2));
    navigate("./form");
  };

  return (
    <>
      <Container maxWidth="lg" style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={8} md={9}>
            <ArrowBackIcon />
          </Grid>
          <Grid item xs={8} sm={4} md={3} style={{ alignItems: "right" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#233a70", borderRadius: "20px" }}
              onClick={requestBtnHandler}
            >
              Raise a Request
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Raise a Request
              </BootstrapDialogTitle>
              <DialogActions style={{ color: "#245893" }}>
                <Button variant="outlined" onClick={handleProductQuery}>
                  Product Query
                </Button>
                <Button variant="outlined" onClick={handleSampleRequest}>
                  Sample Request
                </Button>
                <Button variant="outlined" onClick={handleSetupMeeting}>
                  SetUp Meeting
                </Button>
              </DialogActions>
            </BootstrapDialog>
          </Grid>
          <Grid item xs={12} style={{ margin: "20px" }}>
            <Typography>
              Hypercholesterolemia &nbsp; > &nbsp;
              {/* <ChevronRightIcon /> */}
              Bempedoic acid
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={3}>
            {/* Bempedoic acid */}
            {/* <br /> */}
            <img
              src="./img/squrebox.png"
              alt="boximg"
              loading="lazy"
              style={{ width: "200px" }}
            />
          </Grid>
          <Grid item xs={12} sm={7} md={9}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography style={{ color: "#245893" }}>
                  Therapeutic area
                </Typography>
                <Typography> Hypercholesterolemia </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography style={{ color: "#245893" }}>
                  Menufacturing Plateform
                </Typography>
                <Typography>Synthetic Chemistry</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography style={{ color: "#245893" }}>Category</Typography>
                <Typography>Pipeline Products</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Typography style={{ color: "#245893" }}>
                  Chemical Name
                </Typography>
                <Typography>
                  8-hydroxy-2,2,14 tratmenthy...
                  <Link href="#" underline="none">
                    Read More
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography style={{ color: "#245893" }}>CAS No.</Typography>
                <Typography>5RT567BHU</Typography>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Raiserequest;
