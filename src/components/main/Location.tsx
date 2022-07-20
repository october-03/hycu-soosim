import React from "react";
import MainTitleLayout from "../module/MainTitleLayout";
import map from "../../image/svg/Map.svg";
import CustomText from "../module/CustomText";

export default function Location() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="container"
    >
      <MainTitleLayout title="LOCATION" color="#82969f">
        <img src={map} alt="" style={{ width: "100%", marginTop: 60 }} />
      </MainTitleLayout>
      <div
        style={{
          display: "flex",
          marginTop: 86,
          borderTop: "solid 2px rgba(0,0,0,0.15)",
        }}
        className="container"
      >
        <div
          className="innerContainer"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ flex: 1, paddingTop: 47, paddingBottom: 45 }}>
            <CustomText
              msg="지하철로 오시는 길"
              fontType="extraBold"
              props={{ style: { fontSize: 20, lineHeight: 1.75 } }}
            />
            <CustomText
              msg="한양대역 2번 출구로 나오시면 캠퍼스 내 본관 앞으로 이동하실 수 있습니다."
              fontType="light"
              props={{
                style: { fontSize: 20, marginBottom: 56, lineHeight: 1.75 },
              }}
            />
            <CustomText
              msg="버스로 오시는 길"
              fontType="extraBold"
              props={{ style: { fontSize: 20, marginBottom: 26 } }}
            />
            <div style={{ display: "flex" }}>
              <div>
                <CustomText
                  msg="한양대정문"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="한양대시장"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="한양대부속고등학교"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="한양지구대"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
              </div>
              <div style={{ margin: "0px 56px" }}>
                <CustomText
                  msg="B N62, 121, 302"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="B 121"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="B 121"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
              </div>
              <div>
                <CustomText
                  msg="G 2012, 2014, 2016, 2222"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="G 2013, 4211"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="G 2013"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
                <CustomText
                  msg="G 4211"
                  fontType="light"
                  props={{
                    style: {
                      fontSize: 20,
                      lineHeight: 1.75,
                      letterSpacing: -0.4,
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              borderLeft: "solid 2px rgba(0,0,0,0.15)",
              paddingTop: 47,
              paddingBottom: 45,
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 80,
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <div>
                <CustomText
                  msg="ADDRESS"
                  fontType="extraBold"
                  props={{ style: { fontSize: 20, lineHeight: 1.75 } }}
                />
                <CustomText
                  msg="서울시 성동구 왕십리로 220 한양사이버대학교 (건물번호 702) 0605"
                  fontType="light"
                  props={{
                    style: { fontSize: 20, lineHeight: 1.75 },
                  }}
                />
              </div>
              <div>
                <CustomText
                  msg="TEL"
                  fontType="extraBold"
                  props={{ style: { fontSize: 20, lineHeight: 1.75 } }}
                />
                <CustomText
                  msg="02) 2290-0700"
                  fontType="light"
                  props={{
                    style: { fontSize: 20, lineHeight: 1.75 },
                  }}
                />
              </div>
              <div>
                <CustomText
                  msg="FAX"
                  fontType="extraBold"
                  props={{ style: { fontSize: 20, lineHeight: 1.75 } }}
                />
                <CustomText
                  msg="050) 2290-0605"
                  fontType="light"
                  props={{
                    style: { fontSize: 20, lineHeight: 1.75 },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
