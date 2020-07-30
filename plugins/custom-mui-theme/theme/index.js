import { createMuiTheme } from "@material-ui/core/styles"
import themeData from "./theme.json"

const themeName = "instituto-theme"
export default createMuiTheme({ ...themeData, themeName })
