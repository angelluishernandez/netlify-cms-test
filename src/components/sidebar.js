import React from "react"
import { Paper, Typography, Divider, FormHelperText } from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import { makeStyles } from "@material-ui/core/styles"
import { Col, Container } from "react-bootstrap"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
    padding: "2em",
    fontFamily: theme.typography.fontFamily,
  },
  paper: {
    minHeight: "30%",
    width: "100%",
    position: "relative",
  },
  links: {
    fontWeight: theme.typography.fontWeightBold,
    fontStyle: "none",
    padding: ".5em",
  },
  socialMediaContainer: {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    padding: "1.5em",
  },
}))

// If the width of the screen is lower than 900 a Drawer should be used

const Sidebar = ({}) => {
  const classes = useStyles()

  return (
    <Col xs={2} className={classes.root}>
      <Paper className={classes.paper} elevation={1} p={2}>
        <Link to="/">
          <Typography variant="h6" className={classes.links}>
            NOTICIAS
          </Typography>
        </Link>
        <Divider />
        <Link to="/">
          <Typography variant="h6" className={classes.links}>
            SOBRE EL CENTRO
          </Typography>
        </Link>
        <Divider />
        <Container className={classes.socialMediaContainer}>
          <a href="">
            <FacebookIcon />
          </a>
          |
          <a href="">
            <TwitterIcon />
          </a>
        </Container>
      </Paper>
    </Col>
  )
}

export default Sidebar
