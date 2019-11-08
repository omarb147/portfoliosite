import React from "react"
import ContentLayout from "./ContentLayout"
import Button from "../Utils/Button"
import styled from "styled-components"

const AboutMe = ({ className, id }) => {
  return (
    <ContentLayout
      mainTitle="Omar Bello"
      Seperator
      className={className}
      id={id}
    >
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi fuga
        explicabo ad tempora veniam deleniti ex, totam quis inventore cupiditate
        nesciunt quisquam cumque laudantium nihil quos iusto sunt aperiam! Eius?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
        molestiae eligendi quibusdam error eveniet magnam earum repellat,
        placeat aut, veritatis sunt aspernatur? Saepe minima amet quidem
        mollitia. Magnam, quam doloribus.
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
