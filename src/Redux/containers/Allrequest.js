import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { viewData, MainData } from "../actions/requestAction";

import { useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CloseIcon from "@mui/icons-material/Close";

const Allrequest = () => {
  const [filter, setFilter] = useState([]);
  const [length, setlength] = useState({});

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get the target element to toggle
  const refOne = useRef(null);

  const RaiseRequest = useSelector((state) => state.addInput.requestData);
  const SingleName = useSelector((state) => state.addInput.Name);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  console.log("RaiseRequest", RaiseRequest);

  useEffect(() => {
    setFilter(RaiseRequest);
  }, []);

  const FilterHandler = (status) => {
    console.log("filter", status);
    console.log("RaiseRequestin hanlder", RaiseRequest);
    const newData = RaiseRequest.filter((list) => {
      if (status === "all") {
        return list;
      } else {
        return list.status === status;
      }
    });
    console.log("newDtaa", newData);
    setFilter(newData);

    var Length = Object.keys(filter).length;
    if (status === "all") {
      var Data = { ...length, allrequest: Length };
    } else if (status === "open") {
      var Data = { ...length, open: Length };
    } else if (status === "in progress") {
      var Data = { ...length, inprogress: Length };
    } else {
      var Data = { ...length, close: Length };
    }
    setlength(Data);
    console.log("filter length", Length);
  };

  const sortHandler = () => {
    // setOpen(open = !open);
    // const sortedData = filter.sort(
    //   (a, b) =>
    //     new Date(...a.date.split("-").reverse()) -
    //     new Date(...b.date.split("-").reverse())
    // );
    // setFilter(sortedData);
    // console.log("sort", sortedData);
  };

  console.log("RaiseRequest", RaiseRequest);
  console.log("filter", filter);
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          padding: "10px",
          padding: "20px",
          backgroundColor: "#F0FFFF",
        }}
      >
        <Grid container spacing={2} style={{ padding: "10px" }}>
          <Grid item sm={12} style={{ fontSize: "25px", fontStyle: "bold" }}>
            Raise a Request
          </Grid>
          <Grid item xs={12} align="center">
            <Grid
              container
              style={{
                //   border: "1px solid blue",
                margin: "5px",
                textAlign: "center",
                justifyItems: "center",
                fontSize: "10px",
              }}
            >
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="text"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  onClick={() => FilterHandler("all")}
                >
                  All Request {length.allrequest}
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="text"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  onClick={() => FilterHandler("open")}
                >
                  open {length.open}
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="text"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  onClick={() => FilterHandler("in progress")}
                >
                  In Progress {length.inprogress}
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button
                  variant="text"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "5px",
                    width: "100%",
                  }}
                  onClick={() => FilterHandler("close")}
                >
                  Closed {length.close}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6}></Grid>
          <Grid
            item
            sm={6}
            style={{ fontSize: "25px", fontStyle: "bold" }}
            className="calendarWrap"
          >
            {/* <Button
              variant="text"
              style={{
                border: "1px solid blue",
                borderRadius: "5px",
              }}
              onClick={sortHandler}
            >
              Sort By Date <KeyboardArrowDownIcon />
            </Button> */}

            {/* <div className="calendarWrap"> */}
            <input
              value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`}
              readOnly
              className="inputBox"
              // onClick={sortHandler}

              onClick={() => setOpen((open) => !open)}
            />

            <div ref={refOne}>
              {open && (
                <DateRange
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={1}
                  direction="horizontal"
                  className="calendarElement"
                />
              )}
            </div>
            {/* </div> */}
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xl"
        style={{
          padding: "10px",
          padding: "20px",
          backgroundColor: "#F0FFFF",
          minHeight: "100vh",
        }}
      >
        <Grid
          container
          spacing={10}
          justify="center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {filter.map((req, id) => {
            return (
              <Grid
                key={id}
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: { xs: "flex" },
                  justifyContent: { xs: "center" },
                }}
              >
                {/* <CardData req={req} id={id} navigate={navigate} /> */}

                <Card className="card" style={{ width: "330px" }}>
                  <CardContent style={{ textAlign: "left" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={11}></Grid>
                      <Grid item xs={1}>
                        <CloseIcon
                          onClick={() => {
                            console.log("req.name", req.name);
                            const DelData = filter.filter((data) => {
                              return data.name != req.name;
                            });
                            setFilter(DelData);
                            dispatch(MainData(DelData));
                          }}

                          // onClick={deleteCardHandler}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Typography>{req.date}</Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Button
                          //   variant="text"
                          // className={req.status==="open" ? "showsidebar " : "hidesidebar"}
                          style={{
                            width: "120px",
                            borderRadius: "20px",
                            // color: "#a9cd92",
                            color:
                              req.status === "open"
                                ? "#a9cd92"
                                : req.status === "close"
                                ? "red"
                                : "blue",
                            // backgroundColor: "#ecf7f3",
                          }}
                        >
                          {req.status}
                        </Button>
                      </Grid>

                      <Grid item xs={5}>
                        <Typography>Name: </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          style={{
                            color: "#3773a9",
                            marginLeft: "10px",
                          }}
                        >
                          {req.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography>CompanyName: </Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          style={{
                            color: "#3773a9",
                            marginLeft: "10px",
                          }}
                        >
                          {req.companyname}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography>QueryType</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          style={{
                            color: "#3773a9",
                            marginLeft: "10px",
                          }}
                        >
                          {req.querytype}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography>Product</Typography>
                      </Grid>
                      <Grid item xs={7}>
                        <Typography
                          style={{
                            color: "#3773a9",
                            marginLeft: "10px",
                          }}
                        >
                          {req.product}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Button
                        variant="contained"
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#183b73",
                          color: "white",
                          width: "100%",
                          height: "45px",
                        }}
                        // onClick={viewDetailsHandler}
                        onClick={() => {
                          dispatch(viewData(req.name));
                          navigate("/viewdetails");
                        }}
                      >
                        View Details
                      </Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Allrequest;
