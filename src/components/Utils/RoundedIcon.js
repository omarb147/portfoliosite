import React from "react"
import styled from "styled-components"

export default styled.button`
  background-color: #49bf9d;
  border-color: white;
  color: white;
  padding: 5px 20px;
  font-size: ${props => `${props.size}em` || "0.8em"};
  border-radius: 10px;

  :focus {
    outline: none;
  }

  :hover {
    transition: all 0.5s;
    border-color: #49bf9d;
    color: #49bf9d;
    background-color: white;
  }

  :active {
    outline: none;
  }
`
