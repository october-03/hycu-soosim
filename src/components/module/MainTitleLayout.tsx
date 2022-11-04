import React, { useEffect, useState } from "react";
import CustomText from "./CustomText";
import { getColor, getTitle } from "./utils";

export default function MainTitleLayout({
  children,
  btnOption,
  title,
  color,
  onTopChange,
  onBottomChange,
  smallTitle,
}: propsType) {
  const [topChoose, setTopChoose] = useState("visual");
  const [bottomChoose, setBottomChoose] = useState("visual");
  const btnData = [
    "visual",
    "newMedia",
    "architecture",
    "industrial",
    "culture",
  ];

  useEffect(() => {
    let bottomSession = sessionStorage.getItem("BottomChoose");
    let topSession = sessionStorage.getItem("TopChoose");
    // console.log(bottomSession);
    if (bottomSession) {
      setBottomChoose(bottomSession);
      if (onBottomChange) {
        onBottomChange(bottomSession);
      }
    }
    if (topSession) {
      setTopChoose(topSession);
      if (onTopChange) {
        onTopChange(topSession);
      }
    }
  }, []);

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
                    color: topChoose === item ? getColor(item) : "#000",
                    paddingBottom: 8,
                    borderBottomWidth: 6,
                    borderBottomColor:
                      topChoose === item ? getColor(item) : "#acacac",
                    borderBottomStyle: "solid",
                  },
                  className: "cursor-pointer headerText",
                  onClick: () => {
                    setTopChoose(item);
                    sessionStorage.setItem("TopChoose", item);
                    if (onTopChange) {
                      onTopChange(item);
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
                    color: bottomChoose === item ? getColor(item) : "#000",
                    paddingBottom: 8,
                    borderBottomWidth: 6,
                    borderBottomColor:
                      bottomChoose === item ? getColor(item) : "#acacac",
                    borderBottomStyle: "solid",
                  },
                  className: "cursor-pointer headerText",
                  onClick: () => {
                    setBottomChoose(item);
                    sessionStorage.setItem("BottomChoose", item);
                    if (onBottomChange) {
                      onBottomChange(item);
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
  onTopChange?: (title: string) => void;
  onBottomChange?: (title: string) => void;
  smallTitle?: string;
};
