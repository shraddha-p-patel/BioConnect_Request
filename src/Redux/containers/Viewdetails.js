import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  OutlinedInput,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {
  EditData,
  filterData,
  viewData,
  MainData,
  NameID,
} from "../actions/requestAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useNavigate } from "react-router-dom";

const Viewdetails = () => {
  const [isEditing, setEditing] = useState(true);
  const [editValue, setEditValue] = useState("");
  const [nameID, setNameID] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RequestData = useSelector((state) => state.addInput.requestData);
  const SingleName = useSelector((state) => state.addInput.Name);

  const FilterData = RequestData.filter((data) => {
    return data.name === SingleName;
  });

  useEffect(() => {
    const CompanyName = FilterData.map((data) => {
      return data.companyname;
    });
    console.log("Name", CompanyName);
    setEditValue(CompanyName);
    console.log("editValue", editValue);
  }, []);

  const EditHandler = (e) => {
    console.log("EditHandler");
    setEditing(false);
    setNameID(SingleName);
  };
  const closeHanlder = () => {
    setEditValue("");
  };

  const successHandler = () => {
    setEditing(true);
    const UpdatedData = RequestData.map((data) => {
      if (data.name === nameID) {
        return { ...data, companyname: editValue };
      } else {
        return data;
      }
    });
    console.log("UpdatedData", UpdatedData);
    dispatch(MainData(UpdatedData));
    console.log("nameID", nameID);
  };

  const onchangeHandler = (e) => {
    setEditValue(e.target.value);
  };

  // console.log("editvalue", editValue);
  console.log("requestdata", RequestData);

  return (
    <>
      <Container maxWidth="xl" style={{ padding: "30px" }}>
        <Box sx={{ bgcolor: "white", height: "100vh", padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid item sm={12} style={{ fontSize: "25px", fontStyle: "bold" }}>
              View Details
            </Grid>
            <Grid item sm={12} style={{ fontSize: "25px", fontStyle: "bold" }}>
              <ArrowBackIcon
                onClick={() => {
                  navigate("./allrequest");
                }}
              />
            </Grid>
            {FilterData.map((data, index) => {
              return (
                <div key={index}>
                  <Grid item md={12} style={{ margin: "10px" }} key={data.ID}>
                    <Box
                      sx={{
                        width: "100%",
                        border: "1px solid black",
                        padding: "10px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <Typography> Name: </Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography>{data.name}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography>Company Name :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            value={editValue}
                            disabled={isEditing}
                            onChange={onchangeHandler}
                            InputProps={{
                              endAdornment: isEditing ? (
                                <InputAdornment position="start">
                                  <EditIcon onClick={EditHandler} />
                                </InputAdornment>
                              ) : (
                                <InputAdornment position="start">
                                  <CloseIcon onClick={closeHanlder} />
                                  <CheckIcon onClick={successHandler} />
                                </InputAdornment>
                              ),
                            }}
                            variant="standard"
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography>Date</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography>{data.date}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography>Query Type :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography>{data.querytype}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography> Product :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography>{data.product}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Typography>Request Status :</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                          <Typography>{data.status}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </div>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Viewdetails;
