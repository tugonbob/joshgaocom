import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function TitleCard({
  children,
  d,
  backgroundImage,
  textLocation = ["top", "left"],
  to = "/",
}: {
  children?: any;
  d?: boolean;
  backgroundImage?: string;
  textLocation?: [string, string] | [string];
  to?: string;
}) {
  // parse textLocation
  let alignItems = "";
  let justifyContent = "";

  // deal with all locations except center, because center could be meant for alignItems and justifyContent
  if (textLocation.includes("left")) justifyContent = "flex-start";
  else if (textLocation.includes("right")) justifyContent = "flex-end";
  if (textLocation.includes("top")) alignItems = "flex-start";
  else if (textLocation.includes("bottom")) alignItems = "flex-end";

  // deal with center. If either alignItems and justifyContent is empty, assume center is meant for that variable
  if (textLocation.includes("center")) {
    if (alignItems === "" && justifyContent === "") {
      alignItems = "center";
      justifyContent = "center";
    } else if (alignItems === "") alignItems = "center";
    else if (justifyContent === "") justifyContent = "center";
  }

  return (
    <div
      style={{
        ...styles.projectContainer,
        ...{ border: d ? "1px solid black" : undefined },
      }}
      className="title-card-container"
    >
      <Link
        to={to}
        style={{
          ...styles.titleCard,
          ...{
            border: d ? "1px solid black" : undefined,
            backgroundImage: `url(${backgroundImage})`,
            alignItems,
            justifyContent,
          },
        }}
        className="link"
      >
        {children}
      </Link>
    </div>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  projectContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40vh",
  },
  titleCard: {
    display: "flex",
    height: "70vh",
    width: "70vw",
    boxSizing: "border-box",
    paddingTop: "10vh",
    paddingBottom: "10vh",
    paddingRight: "10vw",
    paddingLeft: "10vw",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
