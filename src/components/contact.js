import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "2%",
        marginTop: "2%",
      }}
    >
      <h2>Contact</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <span style={{ display: "inline-block" }}>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="mailto:contact@brunotorres.dev"
          >
            <FontAwesomeIcon icon={"envelope"} size="2x" />
          </a>
        </span>
        <span style={{ display: "inline-block" }}>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://github.com/BrunoTorresF"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
          </a>
        </span>
        <span style={{ display: "inline-block" }}>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://linkedin.com/in/BrunoTorresF"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
        </span>
        <span style={{ display: "inline-block" }}>
          <a
            style={{ textDecoration: "none", color: "#7544A6" }}
            href="https://twitter.com/BrunoTFMX"
          >
            <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
          </a>
        </span>
      </div>
    </section>
  )
}

export default Contact
