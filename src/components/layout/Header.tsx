import React from "react";
import CustomText from "../module/CustomText";

export default function Header() {
  const titleData = [
    "ABOUT",
    "GALLERY",
    "INTRODUCTION",
    "PROFESSORS",
    "LOCATION",
  ];
  return (
    <div
      className={"row"}
      style={{
        padding: "20px 00px",
      }}
    >
      <div style={{ flex: 1 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 8,
          justifyContent: "space-between",
        }}
      >
        <CustomText
          props={{
            style: {
              fontSize: 16,
              letterSpacing: "13.68px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          }}
          msg={"Soosim 17.5"}
          fontType={"extraBold"}
        />
        {titleData.map((title, index) => (
          <CustomText
            props={{
              className: "headerText",
              style: {},
            }}
            msg={title}
          />
        ))}
      </div>
      <div style={{ flex: 1 }} />
    </div>
  );
}
