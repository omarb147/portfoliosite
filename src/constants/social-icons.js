import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default [
  {
    icon: (
      <a>
        <FaGithub className="github" />
      </a>
    ),
    title: "github",
  },
  {
    icon: (
      <a>
        <FaLinkedin className="linkedin" />
      </a>
    ),
    title: "linkedin",
  },
  {
    icon: (
      <a>
        <MdEmail className="email" />
      </a>
    ),
    title: "email",
  },
]
