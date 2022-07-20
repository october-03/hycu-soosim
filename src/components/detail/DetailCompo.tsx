import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { memberType } from "../../types/dataType";
import CustomText from "../module/CustomText";
import { getColor } from "../module/utils";

export default function DetailCompo({ data, closeModal }: propsType) {
  // interface CustomizedState {
  //   data: memberType;
  // }

  const location = useLocation();
  const navigation = useNavigate();
  // const state = location.state as CustomizedState; // Type Casting, then you can get the params passed via router
  // const { data } = state;
  useEffect(() => {
    // console.log(data, "myState");
    console.log(navigation, "myNavigation");
    console.log(location, "myLocation");

    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container" style={{ backgroundColor: "#000" }}>
      <div
        className="innerContainer detail-compo"
        style={{
          paddingTop: 100,
          display: "flex",
          position: "relative",
        }}
      >
        <div style={{ width: 300, marginRight: 180 }}>
          <img
            src={require("../../image" + data.gradPic + ".jpg")}
            style={{
              width: 300,
              height: 377,
              objectFit: "contain",
              objectPosition: "center top",
              marginBottom: 34,
            }}
            alt={""}
          />
          <CustomText
            msg={data.name}
            props={{
              style: {
                color: "#fff",
                fontSize: 25,
                paddingBottom: 16,
                borderBottomStyle: "solid",
                borderBottomColor: getColor(data.department),
                borderBottomWidth: 5,
                width: "fit-content",
                marginBottom: 14,
              },
            }}
            fontType="bold"
          />
          <CustomText
            msg={data.id}
            props={{ style: { color: "#fff", marginBottom: 35 } }}
            fontType="light"
          />
          <CustomText
            msg={`${data.comment !== undefined ? data.comment : ""}`}
            props={{
              style: { color: "#fff", whiteSpace: "pre-wrap", lineHeight: 1.5 },
            }}
            fontType="light"
          />
        </div>
        <div>
          <img
            src={require("../../image" + data.designatedWork.image + ".jpg")}
            style={{
              width: 840,
              objectFit: "contain",
              objectPosition: "center top",
            }}
            alt={""}
          />
          {data.designatedWork.video && (
            <iframe
              width="840"
              height="472"
              src={data.designatedWork.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              style={{ marginTop: 42 }}
              frameBorder="0"
            />
          )}
          <CustomText
            msg={`${
              data.designatedWork.title !== undefined
                ? data.designatedWork.title
                : ""
            }`}
            props={{
              style: {
                color: "#fff",
                whiteSpace: "pre-wrap",
                marginTop: 43,
                fontSize: 25,
              },
            }}
            fontType="extraBold"
          />
          <CustomText
            msg={`${
              data.designatedWork.comment !== undefined
                ? data.designatedWork.comment
                : ""
            }`}
            props={{
              style: {
                color: "#fff",
                whiteSpace: "pre-wrap",
                marginTop: 27,
                fontSize: 20,
                marginBottom: 103,
              },
            }}
            fontType="light"
          />
          {data.gradPic.substring(1, 8) === "culture" ? (
            <img
              src={require("../../image" + data.freeWork.image + ".png")}
              style={{
                width: 840,
                // height: 377,
                objectFit: "contain",
                objectPosition: "center top",
              }}
              alt={""}
            />
          ) : (
            <img
              src={require("../../image" + data.freeWork.image + ".jpg")}
              style={{
                width: 840,
                // height: 377,
                objectFit: "contain",
                objectPosition: "center top",
              }}
              alt={""}
            />
          )}
          {data.freeWork.video && (
            <iframe
              width="840"
              height="472"
              src={data.freeWork.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              style={{ marginTop: 42 }}
              frameBorder="0"
            />
          )}
          <CustomText
            msg={`${
              data.freeWork.title !== undefined ? data.freeWork.title : ""
            }`}
            props={{
              style: {
                color: "#fff",
                whiteSpace: "pre-wrap",
                marginTop: 43,
                fontSize: 25,
              },
            }}
          />
          <CustomText
            msg={`${
              data.freeWork.comment !== undefined ? data.freeWork.comment : ""
            }`}
            props={{
              style: {
                color: "#fff",
                whiteSpace: "pre-wrap",
                marginTop: 27,
                fontSize: 20,
                marginBottom: 103,
              },
            }}
          />
        </div>
        <div
          className="exit-icon cursor-pointer"
          onClick={() => {
            // navigation(-1);
            closeModal();
          }}
        />
      </div>
    </div>
  );
}

type propsType = {
  data: memberType;
  closeModal: () => void;
};
