import React, { useEffect, useState } from "react";
import Detail from "../../screens/Detail";
import { memberType } from "../../types/dataType";
import CustomText from "./CustomText";
import ReactModal from "react-modal";

export default function PhotoProfile({ data, color, professor }: propsType) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
    const body = document.querySelector("body");
    if (body) {
      const scrollbar = window.innerWidth - body.clientWidth;
      body.setAttribute(
        "style",
        `--scrollbar: ${scrollbar}px; overflow: scroll;`
      );
    }
  };

  const openModal = () => {
    setOpen(true);
  };

  const resizing = () => {
    const body = document.querySelector("body");
    if (body) {
      const scrollbar = window.innerWidth - body.clientWidth;
      body.setAttribute(
        "style",
        `--scrollbar: ${scrollbar}px; overflow: scroll;`
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div
        className={`${!professor && "cursor-pointer photoBox"}`}
        style={{ marginBottom: 68, display: "flex", flexDirection: "column" }}
        onClick={() => {
          if (!professor) {
            console.log(data);
            // navigate("/detail", { state: { data } });
            openModal();
          }
        }}
      >
        <img
          src={require("../../image" + data.profile + ".png")}
          style={{
            width: 258,
            height: 258,
            objectFit: "contain",
            objectPosition: "center top",
            backgroundColor: "#fff",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#e5e5e5",
          }}
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
      {/* <Detail open={open} data={data} close={closeModal} /> */}
      <ReactModal
        isOpen={open}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "100%",
            inset: 0,
            border: "none",
            borderRadius: 0,
            padding: 0,
            // minWidth: 1410,
            background: "#000",
            overflow: "scroll",
            WebkitOverflowScrolling: "touch",
          },
          overlay: {
            // minWidth: 1410,
            width: "100%",
            zIndex: 10000,
            overflow: "hidden",
          },
        }}
        closeTimeoutMS={200}
        onAfterClose={() => {
          resizing();
        }}
      >
        <Detail data={data} close={closeModal} />
      </ReactModal>
    </>
  );
}

type propsType = {
  data: memberType;
  color: string;
  professor?: boolean;
};
