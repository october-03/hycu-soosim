import React from "react";
import CustomText from "../module/CustomText";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
  const titleData = [
    "about",
    "gallery",
    "introduction",
    "professors",
    "location",
  ];
  const linkFLineData = [
    {
      title: "1ST",
      link: "https://portal.hanyangcyber.ac.kr/Popup/2006graduation/intro_01.asp",
    },
    {
      title: "2ND",
      link: "https://portal.hanyangcyber.ac.kr/Popup/Gra_Exhibition/index.html",
    },
    {
      title: "3RD",
      link: "https://portal.hanyangcyber.ac.kr/Popup/2007_graduation/index.asp",
    },
    {
      title: "3.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/3_5th/main/main.html",
    },
    {
      title: "4TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/4th/main/main.html",
    },
    {
      title: "4.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/4_5th/main/main.html",
    },
    {
      title: "5.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/5_5th/main.html",
    },
    {
      title: "6TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/6th/index.html",
    },
  ];
  const linkSLineData = [
    {
      title: "6.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/6_5th/html/index.html",
    },
    {
      title: "7TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/7th/index.html",
    },
    {
      title: "7.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/7_5th/index.html",
    },
    {
      title: "8TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/8th/index.html",
    },
    {
      title: "8.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/8_5th/index.html",
    },
    {
      title: "9TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/9th/index.html",
    },
    {
      title: "9.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/9_5th/index.html",
    },
    {
      title: "10TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/10th/index.html",
    },
  ];
  const linkTLineData = [
    {
      title: "10.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/10_5th/index.html",
    },
    {
      title: "11TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/11th/index.html",
    },
    {
      title: "11.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/11_5th/index.html",
    },
    {
      title: "12TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/12th/index.html",
    },
    {
      title: "12.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/12_5th/index.html",
    },
    {
      title: "13TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/13th/index.html",
    },
    {
      title: "13.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/13_5th/index.html",
    },
  ];
  const linkFoLineData = [
    {
      title: "14TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/14th/index.html",
    },
    {
      title: "14.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/14_5th/index.html",
    },
    {
      title: "15TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/15th/index.html",
    },
    {
      title: "15.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/15_5th/index.html",
    },
    {
      title: "16TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/16th/index.html",
    },
    {
      title: "16.5TH",
      link: "https://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/16_5th/index.html",
    },
    {
      title: "17TH",
      link: "http://portal.hanyangcyber.ac.kr/Popup/GrdExhibition/17th/index.html",
    },
  ];
  return (
    <div style={{ backgroundColor: "#000" }} className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          paddingTop: 71,
          paddingBottom: 74,
        }}
        className="innerContainer"
      >
        <div style={{ flex: 1 }}>
          <div className="headerLogo" />
          <div style={{ marginTop: 45 }}>
            <CustomText
              msg="2022"
              fontType="light"
              props={{
                style: { fontSize: 16, lineHeight: 1.63, color: "#fff" },
              }}
            />
            <CustomText
              msg="HANYANG CYBER UNIVERSITY"
              fontType="light"
              props={{
                style: { fontSize: 16, lineHeight: 1.63, color: "#fff" },
              }}
            />
            <CustomText
              msg="FACULTY OF DESIGN"
              fontType="light"
              props={{
                style: { fontSize: 16, lineHeight: 1.63, color: "#fff" },
              }}
            />
            <CustomText
              msg="GRADUATION EXHIBITION"
              fontType="light"
              props={{
                style: { fontSize: 16, lineHeight: 1.63, color: "#fff" },
              }}
            />
          </div>
          <div style={{ display: "flex", marginTop: 42, alignItems: "center" }}>
            <div
              className="sns-icon-01 photoBox cursor-pointer"
              onClick={() => {
                window.open("https://www.hycu.ac.kr/", "_blank");
              }}
            />
            <div
              className="sns-icon-02 photoBox cursor-pointer"
              onClick={() => {
                window.open("https://design.hycu.ac.kr/", "_blank");
              }}
            />
            <div
              className="sns-icon-03 photoBox cursor-pointer"
              onClick={() => {
                window.open("https://blog.naver.com/hycu_design2", "_blank");
              }}
            />
            <div
              className="sns-icon-04 photoBox cursor-pointer"
              onClick={() => {
                window.open("https://www.instagram.com/hycu_design/", "_blank");
              }}
            />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ marginRight: 186 }}>
            <CustomText
              msg="MENU"
              fontType="extraBold"
              props={{ style: { fontSize: 20, color: "#fff" } }}
            />
            <div style={{ marginTop: 34 }}>
              {titleData.map((title, index) => (
                <Link
                  to={title}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <CustomText
                    fontType="light"
                    props={{
                      className: "headerText cursor-pointer",
                      style: { fontSize: 16, color: "#fff", marginBottom: 20 },
                    }}
                    msg={title.toUpperCase()}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <CustomText
              msg="SITE LINKS"
              fontType="extraBold"
              props={{ style: { fontSize: 20, color: "#fff" } }}
            />
            <div style={{ marginTop: 34, display: "flex" }}>
              {linkFLineData.map((assets, index) => (
                <CustomText
                  fontType="light"
                  props={{
                    className: "headerText cursor-pointer",
                    style: {
                      fontSize: 16,
                      color: "#fff",
                      marginRight: 10,
                      marginBottom: 20,
                    },
                    onClick: () => {
                      window.open(assets.link, "_blank");
                    },
                  }}
                  msg={assets.title}
                />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {linkSLineData.map((assets, index) => (
                <CustomText
                  fontType="light"
                  props={{
                    className: "headerText cursor-pointer",
                    style: {
                      fontSize: 16,
                      color: "#fff",
                      marginRight: 10,
                      marginBottom: 20,
                    },
                    onClick: () => {
                      window.open(assets.link, "_blank");
                    },
                  }}
                  msg={assets.title}
                />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {linkTLineData.map((assets, index) => (
                <CustomText
                  fontType="light"
                  props={{
                    className: "headerText cursor-pointer",
                    style: {
                      fontSize: 16,
                      color: "#fff",
                      marginRight: 10,
                      marginBottom: 20,
                    },
                    onClick: () => {
                      window.open(assets.link, "_blank");
                    },
                  }}
                  msg={assets.title}
                />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {linkFoLineData.map((assets, index) => (
                <CustomText
                  fontType="light"
                  props={{
                    className: "headerText cursor-pointer",
                    style: {
                      fontSize: 16,
                      color: "#fff",
                      marginRight: 10,
                      marginBottom: 20,
                    },
                    onClick: () => {
                      window.open(assets.link, "_blank");
                    },
                  }}
                  msg={assets.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
