import React from "react"
import styled from "styled-components"

export default styled.button`
  background-color: Transparent;
  color: #787878;
  padding: 10px 20px;
  font-size: ${props => `${props.size}em` || "0.8em"};
  border: 3px solid #efefef;
  border-radius: 10px;

  :focus {
    outline: none;
  }

  :hover {
    transition: all 0.5s;
    border-color: #49bf9d;
    color: #49bf9d;
  }

  :active {
    outline: none;
  }
`
