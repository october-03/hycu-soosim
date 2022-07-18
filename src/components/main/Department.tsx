import React, { useState } from "react";
import Architecture from "../department/Architecture";
import Culture from "../department/Culture";
import Industrial from "../department/Industrial";
import NewMedia from "../department/NewMedia";
import Visual from "../department/Visual";
import MainTitleLayout from "../module/MainTitleLayout";
import { getColor, getTitle } from "../module/utils";

export default function Department() {
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

  const getSmallTitle = (title: string) => {
    switch (title) {
      case "visual":
        return `"기초에 생각을 더한 그래픽감각 교육"`;
      case "newMedia":
        return `"새로운 시대의 선도적 디자인 교육"`;
      case "architecture":
        return `"느낌과 기획력을 겸비한 공간설계 전문 디자이너 교육"`;
      case "industrial":
        return `"생활의 미래! 산업디자인의 미래!"`;
      case "culture":
        return `"리더를 위한 디자인 융복합 교육"`;
      default:
        return "";
    }
  };

  return (
    <MainTitleLayout
      btnOption="top"
      onChange={onChoose}
      title={getTitle(choose) + "학과"}
      color={getColor(choose)}
      smallTitle={getSmallTitle(choose)}
    >
      {choose === "visual" ? (
        <Visual />
      ) : choose === "newMedia" ? (
        <NewMedia />
      ) : choose === "architecture" ? (
        <Architecture />
      ) : choose === "industrial" ? (
        <Industrial />
      ) : (
        <Culture />
      )}
    </MainTitleLayout>
  );
}
