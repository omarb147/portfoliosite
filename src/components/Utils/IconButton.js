import React from "react"
import styled from "styled-components"
import { IoMdArrowRoundBack } from "react-icons/io"

const icons = {
  back: <IoMdArrowRoundBack />,
}

const IconButton = props => (
  <button className={props.className}>
    {icons[props.icon]}
    <span>{props.children}</span>
  </button>
)

export default styled(IconButton)`
  background-color: Transparent;
  color: #787878;
  padding: 10px 20px;
  font-size: ${props => `${props.iconSize}em` || "0.8em"};
  border: none;
  border-radius: none;
  display: flex;
  flex-direction: column;

  :focus {
    outline: none;
  }

  :hover {
    transition: all 0.5s;
    color: #49bf9d;
    span {
      color: #49bf9d;
      transition: all 0.5s;
    }
  }

  :active {
    outline: none;
  }

  span {
    font-size: ${props => `${props.textSize}em` || "0.8em"};
    color: #787878;
  }
`
