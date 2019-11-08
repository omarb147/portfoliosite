import React from "react"
import styled from "styled-components"

const FlashMessage = ({ message, className }) => (
  <div className={className}>{message}</div>
)

export default styled(FlashMessage)`
  background-color: ${props =>
    props.type === "negative" ? "rgba(255,0,0,0.2)" : "rgba(0,255,0,0.2)"};
  color: #ffff;
  padding: 10px;
  border-radius: 10px;
`
