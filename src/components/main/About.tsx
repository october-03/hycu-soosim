import React from "react";
import CustomText from "../module/CustomText";
import MainTitleLayout from "../module/MainTitleLayout";

export default function About() {
  return (
    <MainTitleLayout color="#e8342f" title="ABOUT 17.5">
      <div style={{ paddingTop: 128, paddingBottom: 163 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 127,
            borderBottomColor: "#aaa",
            borderBottomStyle: "solid",
            borderBottomWidth: 1,
          }}
        >
          <div style={{ flex: 1 }}>
            <div className="dLogo" />
          </div>
          <div
            style={{
              flex: 3.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <CustomText
                msg="A CONGRATULATORY ADDRESS"
                fontType="extraBold"
                props={{ style: { fontSize: 40, marginBottom: 21 } }}
              />
              <CustomText
                msg="HANYANG CYBER UNIVERSITY DIVISION OF DESIGN"
                fontType="extraBold"
                props={{
                  style: { color: "#aaa", fontSize: 25, marginBottom: 25 },
                }}
              />
              <CustomText
                msg="2022학년도 제17.5회 졸업전시회 개최를 진심으로 축하드립니다"
                fontType="bold"
                props={{ style: { fontSize: 20, marginBottom: 5 } }}
              />
              <CustomText
                msg={`21세기 문화 컨텐츠를 선도해 나갈 수 있는 디자이너의 열정과 노력을 담아 한양사이버대학교 디자인학부 졸업전시회를 개최하게 되었습니다.`}
                fontType="light"
                props={{ style: { fontSize: 20, lineHeight: 1.5 } }}
              />
              <CustomText
                msg="본 졸업작품집은 한양사이버대학교 디자인학부 모든 학우들의 디자인에 대한 순수 열정의 표현으로 4학년 학사학위 취득의 필수 과정과
              각 학년별 과제 모음으로 이루어져 있습니다."
                fontType="light"
                props={{
                  style: { fontSize: 20, lineHeight: 1.5 },
                }}
              />
            </div>
            <CustomText
              msg="본 작품집은 학사학위 취득 논문을 대신합니다."
              props={{ style: { fontSize: 20 } }}
              fontType="extraBold"
            />
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 163 }}
        >
          <iframe
            width="940"
            height="529"
            src="https://www.youtube.com/embed/D8pEsbTY_2Q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            frameBorder={0}
          />
        </div>
      </div>
    </MainTitleLayout>
  );
}
