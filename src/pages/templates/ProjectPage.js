import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import Layout from "../../components/layout"
import ContentLayout from "../../components/Content/ContentLayout"
import IconButton from "../../components/Utils/IconButton"
import HR from "../../components/Utils/horizontalRule"
import bg from "../../images/bg.jpg"
import RoundedIcon from "../../components/Utils/RoundedIcon"
import * as ROUTES from "../../constants/routes"

export const query = graphql`
  query($slug: String!) {
    allStrapiProject(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          caption
          title
          id
          githubRepo
          demoLink
          technologies
          projectStatus
          projectDetails
          productPageCaption
          created_at
          updated_at
        }
      }
    }
  }
`

const ProjectPage = ({ className, data }) => {
  const project = data.allStrapiProject.edges[0].node
  console.log(project)
  const {
    demoLink,
    githubRepo,
    id,
    caption,
    projectPageCaption,
    projectDetails,
    projectStatus,
    technologies,
    title,
  } = project
  return (
    <Layout padding="0px" className={className}>
      <ContentLayout
        mainTitle={
          <div className="page_title_header">
            <Link className="nav_button" to={ROUTES.HOME}>
              <IconButton iconSize="1.3" icon="back" textSize="0.2">
                Homepage
              </IconButton>
            </Link>
            <div className="page_title_heading">
              <div className="title"> {title}</div>
              <div className="subtitle">{caption}</div>
            </div>
          </div>
        }
      >
        <div className="project_page_image">
          <img src={bg}></img>
          <div>{projectPageCaption}</div>
        </div>
        <div className="project_details">
          <h2>Summary</h2>
          <ul>
            <li>
              <span> Demo Link:</span> <a href={demoLink}>{demoLink}</a>
            </li>
            <li>
              <span> GitHub Repo:</span>
              <a href={githubRepo}>{githubRepo}</a>{" "}
            </li>
            <li>
              <span>Technologies used:</span>
              {technologies &&
                technologies
                  .split(",")
                  .map((name, index) => (
                    <RoundedIcon id={index}>{name}</RoundedIcon>
                  ))}
            </li>
            <li>
              <span>Current Status:</span> {projectStatus}
            </li>
          </ul>
        </div>
        <HR color="#a2a2a2" />
        <div>
          <h2> Project Details</h2>
          <ReactMarkdown source={projectDetails} />
        </div>
      </ContentLayout>
    </Layout>
  )
}

export default styled(ProjectPage)`
  h2 {
    font-size: 1.5em;
    padding-bottom: 10px;
  }
  .page_title_header {
    color: #787878;
    display: flex;
    align-items: center;

    .page_title_heading {
      flex: 9;
      .subtitle {
        font-size: 0.4em;
        color: #a2a2a2;
      }
    }

    .nav_button {
      flex: 2;
    }
  }

  .project_page_image {
    padding-bottom: 10px;

    img {
      border-radius: 10px;
      object-fit: cover;
      width: 100%;
      max-height: 500px;
      opacity: 1;
      display: block;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
    div {
      font-size: 1em;
      color: #a2a2a2;
    }
  }

  .project_details {
    li span {
      color: #49bf9d;
      padding-right: 10px;
    }
    li {
      padding: 5px 0px;
    }
  }
`
