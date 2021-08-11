import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import Register from "../../components/register/register";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhoneIcon from "@material-ui/icons/Phone";

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const values = datas => {
    console.log(datas, "dattasss");
    if (datas.name == "Create Your Talent Account") {
      // var body = {
      //   first_name: datas.firstname,
      //   last_name: datas.lastname,
      //   username: datas.username,
      //   email: datas.email,
      //   password: datas.password,
      //   timezone: datas.timezone,
      //   phone: datas.phone,
      //   message: datas.message,
      //   captcha: true,
      // };
      var body = {
        first_name: "Test",
        last_name: "Testing",
        username: "tesoter-ht",
        email: "tester-h@gmail.com",
        password: "Password12#",
        timezone: "America/New_York",
        phone: "99995668450",
        message: "rretrtrtr5to",
        captcha: true,
      };

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
      console.log("error");
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
      >
        <Tab icon={<PhoneIcon />} aria-label="phone" {...a11yProps(0)} />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Register name="Create Your fan Account" formValuesToTabs={values} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register
          name="Create Your Talent Account"
          talent={true}
          formValuesToTabs={values}
        />
      </TabPanel>
    </div>
  );
}
