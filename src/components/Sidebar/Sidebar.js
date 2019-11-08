import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import image from "../../images/person.jpeg"
import Footer from "./footer"
import nav from "../../constants/nav-links"
import HR from "../Utils/horizontalRule"
import * as CSS from "../../constants/css-constants"
import SidebarLayout from "../Utils/SidebarLayout"

const getSiteDetails = graphql`
  query getSiteDetails {
    allStrapiConfig(limit: 1) {
      edges {
        node {
          sidebarImage {
            publicURL
          }
          siteDescription
          siteName
        }
      }
    }
  }
`

const Sidebar = ({ className }) => {
  const data = useStaticQuery(getSiteDetails)
  const info = data.allStrapiConfig.edges[0].node
  const { siteName, siteDescription, sidebarImage } = info
  return (
    <SidebarLayout className={className}>
      <div className="details_box">
        <img className="display_Image" src={sidebarImage.publicURL}></img>
        <div className="description">
          <span>{siteName}</span>
          {siteDescription}
        </div>
      </div>
      <HR className="HR" />
      <div className="nav">
        <ul>
          {Object.keys(nav).map(key => (
            <li id={key}>
              <Link className="link" to={nav[key].href}>
                {nav[key].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </SidebarLayout>
  )
}

export default styled(Sidebar)`
  .details_box {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .description {
    color: hsla(0, 0%, 100%, 0.5);
    text-align: right;
    padding-top: 30px;
    line-height: 40px;

    span {
      display: block;
      color: white;
    }
  }
  .nav {
    display: flex;
    padding: 20px 0px;
    text-align: center;
    justify-content: center;
    flex-grow: 2;

    li {
      padding: 10px;
      color: hsla(0, 0%, 100%, 0.5);
    }
    link {
    }
  }

  .display_Image {
    border-radius: 50%;
    object-fit: cover;
    height: 150px;
    width: 150px;
  }

  @media only screen and (max-width: ${CSS.theme.sm.maxWidth}) {
    .details_box {
      flex-direction: row;
      align-items: flex-start;
    }
    .description {
      line-height: ${CSS.theme.sm.lineHeight};
      text-align: left;
      padding-left: ${CSS.theme.sm.padding};
    }
    .nav,
    .HR {
      display: none;
    }
  }
`
