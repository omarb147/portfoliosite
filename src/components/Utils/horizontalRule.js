import React from "react"
import styled from "styled-components"

const HR = ({ className }) => (
  <div class={className}>
    <hr />
  </div>
)

export default styled(HR)`
  padding: 30px;

  hr {
    width: ${props => props.width || "80%"};
    border: 0;
    border-top: 2px solid;
    color: ${props => props.color || "hsla(0, 0%, 100%, 0.5)"};
  }
`
