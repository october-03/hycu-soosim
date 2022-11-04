import React from "react";
import CustomText from "../module/CustomText";
import { Link } from "react-scroll";

export default function TopPattern() {
  return (
    <div className="container">
      <div className="backPanner">
        <div className="pannerText" />
        <div className="hycu-logo" />
        <Link to={"about"} spy={true} smooth={true} offset={0} duration={500}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mouseContainer cursor-pointer"
          >
            <div className="scroll-downs">
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
            <CustomText
              msg="Scroll Down"
              props={{
                className: "scrollDownText",
                style: { fontSize: 18, marginTop: 6 },
              }}
              fontType="extraBold"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
