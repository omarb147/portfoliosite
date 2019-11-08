import React, { Component } from "react"
import axios from "axios"
import ContentLayout from "../ContentLayout"
import Button from "../../Utils/Button"
import styled from "styled-components"
import Footer from "../../Sidebar/footer"
import FlashMessage from "../../Utils/FlashMessage"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    flashMessage: { visibility: false, type: "", message: "" },
  }

  onSubmitHandler = async e => {
    e.preventDefault()
    const res = await axios.post("https://formspree.io/xnqqnojo", this.state)
    this.setState({ name: "", email: "", message: "" })
    if (res.status === 200) {
      this.flashMessageHandler("positive")
    } else {
      this.flashMessageHandler("negative")
    }
  }

  flashMessageHandler = type => {
    switch (type) {
      case "negative":
        this.setState({
          flashMessage: {
            visibility: true,
            type: "negative",
            message:
              "Unfortunately the message didn't send, please try again or contact me using another method",
          },
        })
      default:
        this.setState({
          flashMessage: {
            visibility: true,
            type: "positive",
            message:
              "Thank you for contacting me, I will get back to you as soon as possible",
          },
        })
    }
    setTimeout(() => {
      this.setState({ flashMessage: { visibility: false } })
    }, 3000)
  }

  onChangeHandler = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { className, id } = this.props
    const { name, email, message, flashMessage } = this.state
    const validated = name && email && message
    return (
      <ContentLayout mainTitle="Contact Me" className={className} id={id}>
        <div className="contact_content">
          <form onSubmit={this.onSubmitHandler}>
            <div className="form_field">
              <label name="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={this.onChangeHandler}
                value={this.state.name}
              />
            </div>
            <div className="form_field">
              <label name="email">Email</label>
              <input
                type="text"
                name="email"
                onChange={this.onChangeHandler}
                value={this.state.email}
              />
            </div>
            <div className="form_field">
              <label name="message">Message</label>
              <textarea
                name="message"
                rows="8"
                onChange={this.onChangeHandler}
                value={this.state.message}
              />
            </div>
            <Button disabled={!validated}>Submit</Button>
            {flashMessage.visibility && (
              <FlashMessage
                message={flashMessage.message}
                type={flashMessage.type}
              />
            )}
          </form>
          <div className="contact_details">
            Feel free to contact if you have any questions
            <Footer
              iconAlign="flex-start"
              textAlign="left"
              iconPadding="15px 0px"
            />
          </div>
        </div>
      </ContentLayout>
    )
  }
}

export default styled(Contact)`
  background-color: #f6f6f6;
  background-clip: padding-box;
  margin: -50px;
  padding: 50px;
  margin-bottom: -100px;
  display: flex;
  flex-direction: column;

  .contact_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .contact_details {
    flex-grow: 1;
    padding-top: 12px;
  }

  div {
    padding-bottom: 15px;
  }

  .action_button {
    padding-top: 30px;
  }
  form {
    flex-grow: 10;
    flex-basis: 65%;
  }
  .form_field {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      border-radius: 5px;
      border: 0.5px rgba(220, 220, 220, 0.5) solid;
      padding: 10px;
      width: 90%;
      outline: none;
    }
    textarea {
      resize: none;
    }
  }
`
