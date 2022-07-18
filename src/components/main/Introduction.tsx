import React from "react";
import CustomText from "../module/CustomText";
import MainTitleLayout from "../module/MainTitleLayout";

export default function Introduction() {
  return (
    <MainTitleLayout title="INTRODUCTION" color="#f7617b">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 70,
          }}
        >
          <img
            src={require("../../image/icon/introduction_icon_01.png")}
            style={{ width: 29, height: 43, marginBottom: 27 }}
          />
          <div style={{ display: "flex" }}>
            <CustomText
              msg={"디자인학부 교육목표"}
              fontType="bold"
              props={{
                style: {
                  fontSize: 25,
                  marginBottom: 25,
                },
              }}
            />
            <div
              style={{
                width: 3,
                height: 26,
                margin: "0 10px",
                backgroundColor: "#acacac",
              }}
            />
            <CustomText
              msg={"컨셉 중심 교육, 디자인 사고력 증진교육, 융합 소통 교육"}
              fontType="bold"
              props={{ style: { fontSize: 25 } }}
            />
          </div>
          <CustomText
            msg="디자인학부는 2002·2003년 개설된 디지털디자인학과와 공간디자인학과를 통합하여 2011년부터 디자인학부로 개편하면서,"
            fontType="light"
            props={{ style: { fontSize: 20, marginBottom: 5 } }}
          />
          <CustomText
            msg="'통합적 디자인 사고능력을 가진 인재양성'과 '재교육을 통한 새로운 디자인 가치 창조의 요람'을 교육의 목표로 정립하였다."
            fontType="light"
            props={{ style: { fontSize: 20, marginBottom: 5 } }}
          />
          <CustomText
            msg="또한 이를 달성하기 위한 실천전략으로 '컨셉 중심의 교육, 학제적 교육, 온·오프라인 협동교육, 수준 있는 고급디자인 교육'의 방향을 수립하였다."
            fontType="light"
            props={{ style: { fontSize: 20 } }}
          />
        </div>
        <div className="introduction-diagram" style={{ marginTop: 82 }} />
        <div>
          <div
            style={{
              paddingBottom: 82,
              borderBottomColor: "#aaa",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
            }}
          >
            <div className="bottomRectangle" />
            <CustomText
              msg="디자인학부 교육특징"
              fontType="extraBold"
              props={{
                style: { fontSize: 25, marginTop: 26, marginBottom: 27 },
              }}
            />
            <CustomText
              msg="2002·2003년 개설된 '디지털디자인학과'와 '공간디자인학과'를 통합하여, 2011년부터 개편되어 현재 다섯 개의 학과로 구성되어 이론과 실습을 통한 전문적인 디자이너를 양성하고자 합니다. 한양사이버대학교 디자인학부는 통합적 디자인 사고 능력을 가진 인재 양성과 재교육을 통한 새로운 디자인 가치 창조의 요람을 교육 목표로 정립하고 삶의 질 향상을 위해 노력하고 있습니다. 이를 실천하기 위해 컨셉 창조 중심의 교육, 학제적 교육, 온·오프라인 협동 교육, 고급 디자인 교육을 실천합니다."
              props={{
                style: {
                  wordBreak: "break-all",
                  width: "100%",
                  fontSize: 20,
                  lineHeight: 1.5,
                },
              }}
              fontType="light"
            />
          </div>
        </div>
        <div>
          <div
            style={{
              marginTop: 82,
              marginBottom: 76,
            }}
          >
            <div className="topRectangle" />
            <CustomText
              msg="졸업 후 대학원 진학"
              fontType="extraBold"
              props={{
                style: { fontSize: 25, marginTop: 26, marginBottom: 27 },
              }}
            />
            <CustomText
              msg="오프라인 대학교보다 훨씬 높은 대학원 진학률(평균 15~20%)ㅣ최근 10년간 약 300명 이상 진학"
              props={{
                style: {
                  wordBreak: "break-all",
                  width: "100%",
                  fontSize: 20,
                  lineHeight: 1.5,
                },
              }}
              fontType="light"
            />
            <CustomText
              msg="홍익대 79명, 국민대 31명, 건국대 16명, 이화여대 15명, 한양사이버대 12명, 단국대 10명, 성균관대 9명, 한양대 8명, 중앙대 6명. 서울과학대 5명, 경희대 4명, 동국대 4명, 상명대 4명,
              연세대 4명, 숙명여대 2명, 경원대, 광운대, 부경대, 서강대, 한국외대, 한림국제대학원대, 금오공과대, 동의대, 명지대, 백석대, 부산대, 서울시립대, 세종대, 수원대, 순천향대, 숭실대,
              영남대, 장로회신학대, 청주대, 주계예술대, 충남대, 한국산업기술대, 한세대, 경기대 등"
              props={{
                style: {
                  wordBreak: "break-all",
                  width: "100%",
                  fontSize: 20,
                  lineHeight: 1.5,
                },
              }}
              fontType="light"
            />
          </div>
        </div>
      </div>
    </MainTitleLayout>
  );
}
