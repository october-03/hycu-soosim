import React, { useState } from "react";
import CustomText from "./CustomText";
import { getColor, getTitle } from "./utils";

export default function MainTitleLayout({
  children,
  btnOption,
  title,
  color,
  onChange,
}: propsType) {
  const [choose, setChoose] = useState("visual");
  const btnData = [
    "visual",
    "newMedia",
    "architecture",
    "industrial",
    "culture",
  ];

  return (
    <div>
      {btnOption === "top" && (
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ flex: 1 }} />
          <div style={{ flex: 8, flexDirection: "row", display: "flex" }}>
            {btnData.map((item, index) => (
              <CustomText
                msg={getTitle(item)}
                fontType="bold"
                props={{
                  style: {
                    fontSize: 25,
                    color: choose === item ? getColor(item) : "#000",
                    paddingBottom: 8,
                    borderBottomWidth: 6,
                    borderBottomColor:
                      choose === item ? getColor(item) : "#acacac",
                    borderBottomStyle: "solid",
                  },
                  className: "cursor-pointer",
                  onClick: () => {
                    setChoose(item);
                    if (onChange) {
                      onChange(item);
                    }
                  },
                }}
              />
            ))}
          </div>
          <div style={{ flex: 1 }} />
        </div>
      )}
      <div
        style={{
          flexDirection: "row",
          backgroundColor: `${color}`,
          display: "flex",
          padding: "20px 0px",
        }}
      >
        <div style={{ flex: 1 }} />
        <div style={{ flex: 8 }}>
          <CustomText
            msg={title}
            fontType={"extraBold"}
            props={{ style: { color: "#fff", fontSize: 30 } }}
          />
        </div>
        <div style={{ flex: 1 }} />
      </div>
      {btnOption === "bottom" && (
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            boxShadow: "0px 2px 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <div style={{ flex: 1 }} />
          <div
            style={{
              flex: 8,
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px 0px",
            }}
          >
            {btnData.map((item, index) => (
              <CustomText
                msg={getTitle(item)}
                fontType="bold"
                props={{
                  style: {
                    fontSize: 25,
                    color: choose === item ? getColor(item) : "#000",
                    paddingBottom: 8,
                    borderBottomWidth: 6,
                    borderBottomColor:
                      choose === item ? getColor(item) : "#acacac",
                    borderBottomStyle: "solid",
                  },
                  className: "cursor-pointer",
                  onClick: () => {
                    setChoose(item);
                    if (onChange) {
                      onChange(item);
                    }
                  },
                }}
              />
            ))}
          </div>
          <div style={{ flex: 1 }} />
        </div>
      )}
      <div style={{ flexDirection: "row", display: "flex" }}>
        <div style={{ flex: 1 }} />
        <div style={{ flex: 8 }}>{children}</div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}

type propsType = {
  children: React.ReactNode;
  btnOption?: "top" | "bottom";
  title: string;
  color: string;
  onChange?: (title: string) => void;
};
