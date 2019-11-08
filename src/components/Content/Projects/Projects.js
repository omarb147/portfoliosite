import React from "react"
import styled from "styled-components"
import ContentLayout from "../ContentLayout"
import Button from "../../Utils/Button"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as CSS from "../../../constants/css-constants"

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

  return (
    <ContentLayout subTitle="Projects" className={className} id={id} Seperator>
      <div className="project_grid">
        {edges.map(project => {
          const { mainImage, strapiId, title, caption, slug } = project.node
          return (
            <div className="project" key={strapiId}>
              <div className="project_image">
                <img src={mainImage.publicURL} />
                <div className="image_button">
                  <Link to={`/${slug}`}>
                    <Button size={1.5}>More Details</Button>
                  </Link>
                </div>
              </div>
              <Link to={`/${slug}`}>
                <div className="project_title">{title}</div>
              </Link>
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
        opacity: 1;
        display: block;
        transition: .5s ease;
        backface-visibility: hidden;
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

    .project_image{
      position: relative;

      .image_button{
        transition: .5s ease;
        opacity: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        position: absolute;
      
      }
    }
    .project_image:hover{
      .image_button{
       opacity:1;
      }

      img{
        opacity:0.3;
      }
      
    }

    @media only screen and (max-width: ${CSS.theme.xl.maxWidth}) {
      
      .project{
        flex-basis: calc(100% - 30px);
      }
  }
`
