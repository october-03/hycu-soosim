import React from "react";
import CustomText from "./CustomText";

export default function BulletPoint({ text, color }: propsType) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        className="bullet"
        style={{ backgroundColor: color, marginRight: 10 }}
      />
      <CustomText
        msg={text}
        fontType="extraBold"
        props={{ style: { fontSize: 25 } }}
      />
    </div>
  );
}

type propsType = {
  text: string;
  color: string;
};
