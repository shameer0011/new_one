import React from "react";
import { useState } from "react";
import { useStyles } from "./form_style";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
const Form = ({ onSubmits, name }) => {
  const [inputField, setInputField] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    timezone: "",
  });
  const [error, setError] = useState(false);
  const [errorFromStore, setErrorFromStore] = useState(false);
  const [show, setShow] = useState(false);
  const classes = useStyles();
  const handleInputs = e => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const onSubmitValues = e => {
    e.preventDefault();

    const order = {
      firstname: inputField.firstname,
      password: inputField.password,
      email: inputField.email,
      timezone: inputField.timezone,
      lastname: inputField.lastname,
      username: inputField.username,
      phone: inputField.phone,
      message: inputField.message,
      name: name,
    };
    if (order.name == "" || order.password == "") {
      setError(true);
      setShow(false);
      setErrorFromStore(false);
    }
    onSubmits(order);
    // if you can use
    // if (order.name && order.password) {
    //   errorMessage.map(i => {
    //     if (i.username !== order.name) {
    //       setErrorFromStore(true);
    //     } else {
    //       onSubmits(order);
    //     }
    //   });
    // }
  };

  return (
    <div>
      {/* <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">HACKER NEWS</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.loginForm}
          >
            <Paper
              variant="elevation"
              elevation={4}
              className={classes.loginBackground}
            >
              <Grid item>
                <Typography component="h5">{name}</Typography>
              </Grid>
              <Grid item>
                <form onSubmit={onSubmitValues}>
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    style={{ borderRadious: "50%" }}
                  >
                    <Grid item>
                      <Typography component="h5">first name*</Typography>
                    </Grid>

                    <Grid item style={{ borderRadious: "75%" }}>
                      <TextField
                        style={{ borderRadious: "50%" }}
                        type="name"
                        placeholder="First Name"
                        fullWidth
                        name="firstname"
                        
                        variant="outlined"
                        value={inputField.firstname}
                        onChange={handleInputs}
                        // required
                        autoFocus
                      />
                    </Grid>

                    <Grid item>
                      <Typography component="h5">last name*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="Last Name"
                        fullWidth
                        name="lastname"
                        variant="outlined"
                        value={inputField.lastname}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>

                    <Grid item>
                      <Typography component="h5">User Name*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        placeholder="User Name"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={inputField.username}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>

                    <Grid item>
                      <Typography component="h5">Email*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="email"
                        variant="outlined"
                        value={inputField.email}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>
                    <Grid item>
                      <Typography component="h5">Time Zone*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="time"
                        step="1"
                        // placeholder={}
                        fullWidth
                        name="timezone"
                        variant="outlined"
                        value={inputField.timezone}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>
                    <Grid item>
                      <Typography component="h5">Password*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={inputField.password}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>

                    <Grid item>
                      <Typography component="h5">Phone*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="phone"
                        placeholder="Phone"
                        fullWidth
                        name="phone"
                        variant="outlined"
                        value={inputField.phone}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>
                    <Grid item>
                      <Typography component="h5">Meessage*</Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        type="text"
                        step="1"
                        placeholder="Message"
                        fullWidth
                        name="message"
                        variant="outlined"
                        value={inputField.message}
                        onChange={handleInputs}
                        // required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.buttonBlock}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
          <div>
            {/* <div>
              {show && errorMessage.length === 0
                ? <span style={{color:"red"}}>Username and Password is incorrected</span>
                : ""}
            </div> */}
            <div>
              {error ? inputField.name === "" || inputField.password === "" ? (
                <span style={{ color: "red" }}>
                  {" "}
                  Username or Password is empty
                </span>
              ) : (
                ""
              ) : (
                ""
              )}
              {/* <div>
                {errorFromStore && <span style={{color:"red"}}>Username and Password is incorrected</span>}
              </div> */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Form;
