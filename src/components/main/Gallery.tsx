import React, { useState } from "react";
import { Data } from "../../Data";
import MainTitleLayout from "../module/MainTitleLayout";
import PhotoProfile from "../module/PhotoProfile";
import { getColor } from "../module/utils";

export default function Gallery() {
  const [choose, setChoose] = useState<
    "visual" | "newMedia" | "architecture" | "industrial" | "culture"
  >("visual");
  const onChoose = (title: string) => {
    switch (title) {
      case "visual":
        setChoose("visual");
        break;
      case "newMedia":
        setChoose("newMedia");
        break;
      case "architecture":
        setChoose("architecture");
        break;
      case "industrial":
        setChoose("industrial");
        break;
      case "culture":
        setChoose("culture");
        break;
      default:
        setChoose("visual");
        break;
    }
  };
  return (
    <MainTitleLayout
      title="GALLERY"
      color="#ffd43c"
      btnOption="bottom"
      onBottomChange={onChoose}
    >
      <div
        style={{
          flex: 1,
          marginTop: 50,
        }}
        className="grid-container"
      >
        {Data[choose].map((item, index) => {
          return <PhotoProfile data={item} color={getColor(choose)} />;
        })}
      </div>
    </MainTitleLayout>
  );
}
