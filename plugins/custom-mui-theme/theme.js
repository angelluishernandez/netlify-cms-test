import React from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: { light: "#9adcfb", main: "#81d4fa", dark: "#5a94af" },
    secondary: { light: "#EEEEEE", main: "#BDBDBD", dark: "#616161" },
    error: { light: "#e57373", main: "#f44336", dark: "#d32f2f" },
    warning: { light: "#ffb74d", main: "#ff9800", dark: "#f57c00" },
    info: { light: "#64b5f6", main: "#2196f3", dark: "#1976d2" },
    success: { light: "#81c784", main: "#4caf50", dark: "#388e3c" },
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
})

export default theme
