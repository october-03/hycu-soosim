import React from "react";
import CustomText from "../module/CustomText";

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
          <CustomText
            fontType="bold"
            props={{
              className: "headerText cursor-pointer",
              style: {},
              onClick: () => {
                window.location.href = `#${title}`;
              },
            }}
            msg={title.toUpperCase()}
          />
        ))}
      </div>
    </div>
  );
}
