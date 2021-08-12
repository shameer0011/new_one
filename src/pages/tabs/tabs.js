import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import Register from "../../components/register/register";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "black",
  },
  tabpanel: {
    marginLeft: "500px",
    marginRight: "200px",
    backgroundColor: "#222222",
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const values = datas => {
    var body = {
      first_name: datas.firstname,
      last_name: datas.lastname,
      username: datas.username,
      email: datas.email,
      password: datas.password,
      timezone: datas.timezone,
      phone: datas.phone,
      message: datas.message,
      captcha: true,
    };
    if (datas.name == "Create Your Talent Account") {
      axios({
        method: "post",
        url: "https://admin.fanconvo.com/api/v3/sign-up/talent",
        data: body,
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      axios({
        method: "post",
        url: "https://admin.fanconvo.com/api/v3/sign-up/fan",
        data: body,
      })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="off"
        aria-label="scrollable prevent tabs example"
        style={{ alignContent: "center" }}
        className={classes.tabpanel}
      >
        <Tab
          icon="Fan Signup"
          aria-label="phone"
          {...a11yProps(0)}
          style={{ color: "white", background: "bleck" }}
        />
        <Tab
          icon="Talent Signup"
          aria-label="favorite"
          {...a11yProps(1)}
          style={{ color: "white", background: "bleck" }}
        />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <Register name="Create Your fan Account" formValuesToTabs={values} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <Register
          name="Create Your Talent Account"
          talent={true}
          formValuesToTabs={values}
        />
      </TabPanel>
    </div>
  );
}
