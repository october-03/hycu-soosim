import React, { useState } from "react";
import CustomText from "./CustomText";
import { getColor, getTitle } from "./utils";

export default function MainTitleLayout({
  children,
  btnOption,
  title,
  color,
  onChange,
  smallTitle,
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
        <div
          className="container"
          style={{
            boxShadow: "0px 2px 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            className="innerContainer"
            style={{
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
        </div>
      )}
      <div
        className="container"
        style={{
          backgroundColor: `${color}`,
          padding: "20px 0px",
        }}
      >
        <div
          className="innerContainer"
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomText
            msg={title}
            fontType={"extraBold"}
            props={{ style: { color: "#fff", fontSize: 30 } }}
          />
          {smallTitle && (
            <CustomText
              msg={smallTitle}
              props={{
                style: {
                  color: "rgba(255, 255, 255)",
                  fontSize: 25,
                  opacity: 0.5,
                },
              }}
            />
          )}
        </div>
      </div>
      {btnOption === "bottom" && (
        <div
          className="container"
          style={{
            boxShadow: "0px 2px 10px 0 rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            className="innerContainer"
            style={{
              flexDirection: "row",
              display: "flex",
              padding: "20px 0px",
              justifyContent: "space-between",
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
        </div>
      )}
      <div className="container">
        <div className="innerContainer">{children}</div>
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
  smallTitle?: string;
};
