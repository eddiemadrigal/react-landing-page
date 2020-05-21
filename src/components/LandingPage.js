import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImage from "../images/bgDesktop.jpg";

const useStyles = makeStyles((theme) => ({
 "@global": {
  body: {
   backgroundImage: `url(${BackgroundImage})`,
  },
 },
 appBar: {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: "#2196F3",
 },
 toolbar: {
  flexWrap: "wrap",
 },
 toolbarTitle: {
  flexGrow: 1,
  fontFamily: "sansita",
  color: "#fff",
  fontSize: "36px",
 },
 link: {
  margin: theme.spacing(1, 1.5),
  color: "#fff",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "11px",
  letterSpacing: "0.25px",
 },
 heroContent: {
  padding: theme.spacing(8, 0, 6),
  maxWidth: 800,
 },
 mainHeading: {
  textAlign: "center",
  color: "#fff",
  fontFamily: "Roboto Condensed",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 70,
  marginTop: 40,
 },
 subTag: {
  textAlign: "center",
  fontFamily: "Roboto Condensed",
  maxWidth: 350,
  margin: "0 auto",
  fontWeight: "bold",
 },
 button: {
  backgroundColor: "#2196F3",
  fontFamily: "Roboto Condensed",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 17,
  lineHeight: "20px",
  color: "#fff",
  padding: "15px",
 },
 butttonContainer: {
  textAlign: "center",
 },
}));

export default function LandingPage() {
 const classes = useStyles();

 return (
  <React.Fragment>
   <CssBaseline />
   <AppBar position="static" elevation={0} className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
     <Typography variant="h6" noWrap className={classes.toolbarTitle}>
      SoMe
     </Typography>
     <nav>
      <Link variant="button" href="#" className={classes.link}>
       SIGN UP
      </Link>
      <Link variant="button" href="#" className={classes.link}>
       LOGIN
      </Link>
     </nav>
    </Toolbar>
   </AppBar>
   {/* Hero unit */}
   <Container component="main" className={classes.heroContent}>
    <Typography
     component="h1"
     variant="h2"
     gutterBottom
     className={classes.mainHeading}
    >
     Social Media Management made easy.
    </Typography>
    <Typography component="p" className={classes.subTag}>
     Discover how to develop your brand
     <br />
     and manage your digital marketing strategy
    </Typography>
   </Container>
   {/* End hero unit */}
   <Container
    maxWidth="md"
    component="main"
    className={classes.butttonContainer}
   >
    <Button component="button" className={classes.button}>
     Get Started
    </Button>
   </Container>
  </React.Fragment>
 );
}
