import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { checkStatus, saveInput } from "../actions/requestAction";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabChange } from "../actions/requestAction";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    companyname: "",
    // date: "",
    querytype: "",
    product: "",
    status: "",
  });

  const TabValue = useSelector((state) => state.addInput.value);

  // console.log("TabValue", TabValue);

  const [value, setValue] = useState(TabValue);

  const tab1Click = () => {
    console.log("tab1click");
    dispatch(tabChange(0));
  };

  const tab2Click = () => {
    console.log("tab2click");
    dispatch(tabChange(1));
  };

  const tab3Click = () => {
    console.log("tab3click");
    dispatch(tabChange(2));
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const SaveBtnHandler = () => {
    dispatch(saveInput(input));
    navigate("/allrequest");
  };

  const OnchangeHandler = (e) => {
    const Value = e.target.value;
    let field = e.target.name;
    setInput({ ...input, [field]: Value }); //shortcode for setInput for all field

    // if (e.target.name === "name") {
    //   setInput({ ...input, ...{ name: Value } });
    // } else if (e.target.name === "companyname") {
    //   setInput({ ...input, ...{ companyname: Value } });
    // } else if (e.target.name === "querytype") {
    //   setInput({ ...input, querytype: Value });
    // } else if (e.target.name === "product") {
    //   setInput({ ...input, product: Value });
    // } else if (e.target.name === "status") {
    //   setInput({ ...input, ...{ status: Value } });
    // } else if (e.target.name === "date") {
    //   setInput({ ...input, ...{ date: Value } });
    // }
  };

  const handleChange = (event) => {
    setValue(TabValue);
    console.log("valuie");
  };

  console.log("TabValue", TabValue);
  console.log("input", input);

  return (
    <>
      <Container maxWidth="xl" style={{ padding: "30px" }}>
        <Box sx={{ bgcolor: "white", height: "100vh", padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid item sm={12} style={{ fontSize: "25px", fontStyle: "bold" }}>
              Raise a Request
            </Grid>
            <Grid item md={12} style={{ margin: "10px" }}>
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label=" Product Query"
                      style={{
                        border: "1px solid blue",
                        borderRadius: "10px",
                        padding: "7px",
                      }}
                      onClick={tab1Click}
                    />

                    <Tab
                      label="Sample Request"
                      style={{
                        border: "1px solid blue",
                        borderRadius: "10px",
                        padding: "7px",
                      }}
                      onClick={tab2Click}
                    />

                    <Tab
                      label="Set up a Meeting"
                      style={{
                        border: "1px solid blue",
                        borderRadius: "10px",
                        padding: "7px",
                      }}
                      onClick={tab3Click}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography> Name</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Name"
                        name="name"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Company Name</Typography>
                      <OutlinedInput
                        fullWidth
                        placeholder="Company Name"
                        name="companyname"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Date</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        type="Date"
                        fullWidth
                        name="date"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Query Type</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        fullWidth
                        name="querytype"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography> Product*</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Enter Product"
                        name="product"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Request Status</Typography>

                      <Select
                        id="outlined-select-currency"
                        select
                        name="status"
                        value={input.status}
                        fullWidth
                        onChange={OnchangeHandler}
                        style={{ minWidth: "230px" }}
                      >
                        <MenuItem value="open">Open</MenuItem>
                        <MenuItem value="in progress">In Progress</MenuItem>
                        <MenuItem value="close">close</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>End Markets*</Typography>

                      <Select
                        id="outlined-select-currency"
                        select
                        placeholder="Choose End Markets"
                        fullWidth
                      >
                        <MenuItem>end market 1</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Additional Emails</Typography>
                      <OutlinedInput
                        placeholder="Enter Additional Email"
                        fullWidth
                        name="additional emails"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Comments*</Typography>
                      <OutlinedInput
                        placeholder="Enter Your Comments here"
                        fullWidth
                        multiline
                        rows={3}
                        name="comments"
                        onChange={OnchangeHandler}
                      />
                    </Grid>

                    <Grid item xs={12} align="center">
                      <Button variant="contained" onClick={SaveBtnHandler}>
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography> Name</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Name"
                        name="name"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Company Name</Typography>
                      <OutlinedInput
                        fullWidth
                        placeholder="Company Name"
                        name="companyname"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Date</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        type="Date"
                        fullWidth
                        name="date"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Query Type</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        fullWidth
                        name="querytype"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography> Product*</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Enter Product"
                        name="product"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Request Status</Typography>

                      <Select
                        id="outlined-select-currency"
                        select
                        name="status"
                        // label="Document Name"
                        value={input.status}
                        fullWidth
                        onChange={OnchangeHandler}
                        style={{ minWidth: "230px" }}
                      >
                        <MenuItem value="open">Open</MenuItem>
                        <MenuItem value="in progress">In Progress</MenuItem>
                        <MenuItem value="close">close</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography>Comments*</Typography>
                      <OutlinedInput
                        placeholder="Enter Your Comments here"
                        fullWidth
                        multiline
                        rows={3}
                        name="comments"
                        onChange={OnchangeHandler}
                      />
                    </Grid>

                    <Grid item xs={12} align="center">
                      <Button variant="contained" onClick={SaveBtnHandler}>
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography> Name</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Name"
                        name="name"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Company Name</Typography>
                      <OutlinedInput
                        fullWidth
                        placeholder="Company Name"
                        name="companyname"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Date</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        type="Date"
                        fullWidth
                        name="date"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Query Type</Typography>
                      <OutlinedInput
                        placeholder="Name"
                        fullWidth
                        name="querytype"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography> Product*</Typography>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-amount"
                        placeholder="Enter Product"
                        name="product"
                        onChange={OnchangeHandler}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography>Request Status</Typography>

                      <Select
                        id="outlined-select-currency"
                        select
                        name="status"
                        // label="Document Name"
                        value={input.status}
                        fullWidth
                        onChange={OnchangeHandler}
                        style={{ minWidth: "230px" }}
                      >
                        <MenuItem value="open">Open</MenuItem>
                        <MenuItem value="in progress">In Progress</MenuItem>
                        <MenuItem value="close">close</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={12} align="center">
                      <Button variant="contained" onClick={SaveBtnHandler}>
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Form;
