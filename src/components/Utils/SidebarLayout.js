import React from "react"
import styled from "styled-components"
import * as CSS from "../../constants/css-constants"
import bg from "../../images/bg.jpg"

export default styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)),
    url(${bg}) no-repeat center;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  z-index: 1;
  top: 0;
  position: fixed;
  width: ${CSS.sidebarWidth}px;
  left: 0;
  padding: 50px;

  @media only screen and (max-width: ${CSS.theme.sm.maxWidth}) {
    position: relative;
    width: ${CSS.theme.sm.sidebarWidth};
    align-items: center;
    padding: ${CSS.theme.sm.padding};
    flex-direction: column;
    height: ${CSS.theme.sm.sidebarHeight};
    font-size: ${CSS.theme.sm.fontSize};
    transition: all 1s;
  }

  @media only screen and (min-width: ${CSS.theme.sm.maxWidth}) {
    flex-direction: column;
    width: ${CSS.theme.lg.sidebarWidth};
    height: ${CSS.theme.lg.sidebarHeight};
    font-size: ${CSS.theme.lg.fontSize};
    overflow-y: hidden;
    transition: all 1s;
  }

  @media only screen and (min-width: ${CSS.theme.xl.minWidth}) {
    flex-direction: column;
    width: ${CSS.theme.xl.sidebarWidth};
    height: ${CSS.theme.xl.sidebarHeight};
    font-size: ${CSS.theme.xl.fontSize};
    overflow-y: hidden;
    transition: all 1s;
  }
`
