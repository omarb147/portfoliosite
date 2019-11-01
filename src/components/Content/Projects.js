import React from "react"
import styled from "styled-components"
import ContentLayout from "./ContentLayout"
import image from "../../images/bg.jpg"
import { useStaticQuery, grapql } from "gatsby"
import * as CSS from "../../constants/css-constants"

const getProjects = graphql`
  query Projects {
    allStrapiProject {
      edges {
        node {
          slug
          strapiId
          title
          caption
          mainImage {
            publicURL
          }
        }
      }
    }
  }
`

const Projects = ({ className, id }) => {
  const data = useStaticQuery(getProjects)
  const { edges } = data.allStrapiProject
  console.log(edges)
  return (
    <ContentLayout subTitle="Projects" className={className} id={id} Seperator>
      <div className="project_grid">
        {edges.map(project => {
          const { mainImage, strapiId, title, caption, slug } = project.node
          return (
            <div className="project" key={strapiId}>
              <img className="project_image" src={mainImage.publicURL}></img>
              <div className="project_title">{title}</div>
              <div className="project_caption">{caption}</div>
            </div>
          )
        })}
      </div>
    </ContentLayout>
  )
}

export default styled(Projects)`
  .project_grid {
    display: flex;
    flex-wrap: wrap;

    .project {
      flex-basis: calc(50% - 30px);
      margin-right: 30px;
      padding-bottom: 30px;

      img {
        border-radius: 10px;
        object-fit: cover;
        width: 100%;
        height: 300px;
      }

      .project_caption,
      .project_title {
        color: #787878;
        font-size: 1.2em;
        line-height: 2em;
      }
      .project_caption {
        color: #a2a2a2;
        font-size: 0.8em;
      }
    }
  }
`
