import React from "react";
import CustomText from "../module/CustomText";
import { Link } from "react-scroll";

export default function Header() {
  const titleData = [
    "about",
    "gallery",
    "introduction",
    "professors",
    "location",
  ];
  return (
    <div
      className={"container"}
      style={{
        padding: "20px 00px",
      }}
    >
      <div
        className="innerContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="headerLogo" />
        {titleData.map((title, index) => (
          <Link to={title} spy={true} smooth={true} offset={0} duration={500}>
            <CustomText
              fontType="bold"
              props={{
                className: "headerText cursor-pointer",
                style: {},
              }}
              msg={title.toUpperCase()}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
