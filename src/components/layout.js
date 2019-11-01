import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Sidebar from "./Sidebar/Sidebar"
import * as CSS from "../constants/css-constants"
import "./layout.css"

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default styled(Layout)`
  padding: 100px 0px;

  .content {
    padding-left: ${CSS.sidebarWidth + CSS.contentSidePadding}px;
    padding-right: ${CSS.contentSidePadding}px;
  }
`
