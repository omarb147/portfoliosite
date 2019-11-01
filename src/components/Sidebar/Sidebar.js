import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import image from "../../images/person.jpeg"
import bg from "../../images/bg.jpg"
import Footer from "./footer"
import nav from "../../constants/nav-links"
import HR from "../Utils/horizontalRule"
import * as CSS from "../../constants/css-constants"

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

  console.log(data)
  const info = data.allStrapiConfig.edges[0].node
  const { siteName, siteDescription, sidebarImage } = info
  return (
    <div className={className}>
      <div className="details_box">
        <img className="display_Image" src={sidebarImage.publicURL}></img>
        <div className="description">
          <span>{siteName}</span>
          {siteDescription}
        </div>
      </div>
      <HR />
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
    </div>
  )
}

export default styled(Sidebar)`
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)),
    url(${bg}) no-repeat center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  z-index: 1;
  top: 0;
  position: fixed;
  width: ${CSS.sidebarWidth}px;
  left: 0;
  padding: 50px;

  .details_box {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .description {
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
`
