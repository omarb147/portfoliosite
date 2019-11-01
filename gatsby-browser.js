import scrollToElement from "scroll-to-element"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onRouteUpdate = ({ location }) => {
  console.log("here")
  checkHash(location)
}

const checkHash = location => {
  let { hash } = location
  if (hash) {
    scrollToElement(hash, {
      offset: -95,
      duration: 1000,
    })
  }
}

// You can delete this file if you're not using it
