import React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"

const ThemeLayout = ({ children, theme }) => {
  return <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
}

export default ThemeLayout
