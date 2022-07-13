import React from "react";
import { memberType } from "../../types/dataType";
import CustomText from "./CustomText";

export default function PhotoProfile({ data, color }: propsType) {
  return (
    <div style={{ marginBottom: 68, display: "flex", flexDirection: "column" }}>
      <img
        src={require("../../image" + data.gradPic + ".jpg")}
        style={{ width: 260, height: 260 }}
        alt={""}
      />
      <CustomText
        msg={data.name}
        fontType="bold"
        props={{
          style: {
            fontSize: 24,
            marginTop: 18,
            paddingBottom: 16,
            borderBottomWidth: 4,
            borderBottomColor: color,
            borderBottomStyle: "solid",
            width: "fit-content",
            marginBottom: 15,
          },
        }}
      />
      <CustomText
        msg={data.id}
        fontType="light"
        props={{ style: { fontSize: 20 } }}
      />
    </div>
  );
}

type propsType = {
  data: memberType;
  color: string;
};
