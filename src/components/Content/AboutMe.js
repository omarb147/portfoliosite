import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import ContentLayout from "./ContentLayout"
import Button from "../Utils/Button"
import styled from "styled-components"

export const query = graphql`
  query homepageData {
    allStrapiConfig(limit: 1) {
      edges {
        node {
          homepageAboutme
          homepageHeading
        }
      }
    }
  }
`

const AboutMe = ({ className, id }) => {
  const data = useStaticQuery(query)
  const {
    homepageAboutme,
    homepageHeading,
  } = data.allStrapiConfig.edges[0].node
  return (
    <ContentLayout
      mainTitle={homepageHeading}
      Seperator
      className={className}
      id={id}
    >
      <div>
        <ReactMarkdown source={homepageAboutme} />
      </div>
      {/* <div className="action_button">
        <Button>Check My CV</Button>
      </div> */}
    </ContentLayout>
  )
}

export default styled(AboutMe)`
  .action_button {
    padding-top: 30px;
  }
`
