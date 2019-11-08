import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"
import { graphql, useStaticQuery } from "gatsby"

const getSocialLinks = graphql`
  query MyQuery {
    allStrapiConfig(limit: 1) {
      edges {
        node {
          github
          email
          linkedin
        }
      }
    }
  }
`

const Footer = ({ className }) => {
  const data = useStaticQuery(getSocialLinks)
  const socials = data.allStrapiConfig.edges[0].node

  return (
    <div className={className}>
      <div className="social_icons">
        {socialIcons.map(icon => {
          if (icon.title === "email")
            return <a href={`mailto:${socials.email}`}>{icon.icon}</a>
          return <a href={socials[icon.title]}>{icon.icon}</a>
        })}
      </div>
      <div className="author">© Created with React & Gatsby</div>
    </div>
  )
}

export default styled(Footer)`
  .social_icons {
    display: flex;
    justify-content: ${props => props.iconAlign || "flex-end"};
    padding:${props => props.iconPadding || "15px"};

    .linkedin,
    .github,
    .email {
      font-size: 30px;
      margin: 0px 10px 0px 0px;
    }
  }
  .author {
    text-align: ${props => props.textAlign || "right"};
    font-size: 10px;
  }
   
  }
`
