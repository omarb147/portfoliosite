import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AboutMe from "../components/Content/AboutMe"
import Projects from "../components/Content/Projects"
import nav from "../constants/nav-links"

const navLinks = Object.keys(nav)

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <AboutMe id={navLinks[0]} />
    <Projects id={navLinks[1]} />
  </Layout>
)

export default IndexPage
