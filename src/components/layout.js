import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import favicon from "../images/favicon.ico"
import Sidebar from "./Sidebar/Sidebar"
import * as CSS from "../constants/css-constants"
import "./layout.css"

const Layout = ({ children, className }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon}></link>
      </Helmet>
      <div className={className}>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default styled(Layout)`
  padding: ${props => props.padding || "100px 0px"};

  .content {
    padding-right: ${CSS.contentSidePadding}px;
    padding-top: 0px;
  }

  @media only screen and (max-width: ${CSS.theme.sm.maxWidth}) {
    padding: 0px 0px 20px;
    .content {
      padding-left: ${CSS.contentSidePadding}px;
    }
  }

  @media only screen and (min-width: ${CSS.theme.sm.maxWidth}) {
    .content {
      padding-left: calc(
        ${CSS.theme.lg.sidebarWidth} + ${CSS.contentSidePadding}px
      );
      padding-top: 0px;
    }
  }
`
