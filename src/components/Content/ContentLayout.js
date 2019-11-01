import React from "react"
import styled from "styled-components"
import HR from "../Utils/horizontalRule"

const ContentLayout = ({
  className,
  mainTitle,
  subTitle,
  children,
  Seperator,
  id,
}) => {
  return (
    <div class={className} id={id}>
      <h1 className="main_title">{mainTitle}</h1>
      <h4 className="sub_title">{subTitle}</h4>
      <div className="section_content">{children}</div>
      {Seperator && <HR color="#efefef" width="100%" />}
    </div>
  )
}

export default styled(ContentLayout)`
  .section_content,
  .main_title,
  .sub_title {
    padding: 20px 0;
    color: #787878;
  }

  .main_title {
    font-size: 1.6em;
  }

  .section_content div {
    font-size: 0.8em;
    color: #a2a2a2;
  }
`
