import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"

const footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="social_icons">{socialIcons.map(icon => icon.icon)}</div>
      <div className="author">© Gatsby Starter Strata Design: HTML5 UP</div>
    </div>
  )
}

export default styled(footer)`
  .social_icons {
    display: flex;
    justify-content: flex-end;
    padding:15px;

    .linkedin,
    .github,
    .email {
      font-size: 30px;
      margin: 0 10px;
    }
  }
  .author {
    text-align: right;
    font-size: 10px;
  }
   
  }
`
