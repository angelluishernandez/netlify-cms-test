import React, { useState, useEffect } from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp"
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

// Window resize custom hook

import useWindowDimensions from "../hooks/useWindowDimensions"
import { theme } from "../components/UI/Theme"

const Navbar = ({
  currentUser,
  loggedIn,
  open,
  handleDrawerOpen,
  setOpen,
  handleDrawerClose,
}) => {
  console.log(theme)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const { width } = useWindowDimensions()
  const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        // easing: theme.transitions.easing.sharp,
        // duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
    toolBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    mainHeader: {
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "white",
      color: "black",
    },

    links: {
      color: "white",
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightBold,
      fontStyle: "normal",
    },

    menuButton: {
      // marginRight: theme.spacing(2),
    },
    search: {},
  }))

  const classes = useStyles()

  return (
    <AppBar
      position="static"
      className={clsx(classes.appBar, { [classes.appBarShift]: open })}
    >
      <Toolbar className={classes.mainHeader}>
        <img src="images/logo.png" alt="logo" />
        <Link to="/">
          <Typography variant="h2">Centro Primero de Mayo</Typography>
        </Link>
      </Toolbar>
      <Toolbar className={classes.toolBar}>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </div>
        <div>
          <Link to="/">
            <Typography
              variant="body1"
              noWrap
              className={`mr-2 ${classes.links}`}
            >
              Inicio
            </Typography>
          </Link>
        </div>

        {width < 700 ? null : (
          <>
            <div>
              <Link to="/informacion">
                <Typography
                  variant="body1"
                  noWrap
                  className={`mr-2 ${classes.links}`}
                >
                  Información sobre el centro
                </Typography>
              </Link>
            </div>
            <div>
              <Link to="/noticias">
                <Typography
                  variant="body1"
                  noWrap
                  className={`mr-2 ${classes.links}`}
                >
                  Noticias
                </Typography>
              </Link>
            </div>

            <div>
              <Link to="/noticias">
                <Typography
                  variant="body1"
                  noWrap
                  className={`mr-2 ${classes.links}`}
                >
                  Noticias
                </Typography>
              </Link>
            </div>
          </>
        )}

        <div>
          <ExitToAppSharpIcon />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
