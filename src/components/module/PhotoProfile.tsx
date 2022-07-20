import React, { useState } from "react";
import Detail from "../../screens/Detail";
import { memberType } from "../../types/dataType";
import CustomText from "./CustomText";
import ReactModal from "react-modal";

export default function PhotoProfile({ data, color, professor }: propsType) {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={`${!professor && "cursor-pointer photoBox"}`}
        style={{ marginBottom: 68, display: "flex", flexDirection: "column" }}
        onClick={() => {
          if (!professor) {
            console.log(data);
            // navigate("/detail", { state: { data } });
            setOpen(true);
          }
        }}
      >
        <img
          src={require("../../image" + data.gradPic + ".jpg")}
          style={{
            width: 260,
            height: 260,
            objectFit: "cover",
            objectPosition: "center top",
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
            width: "100vw",
            inset: 0,
            border: "none",
            borderRadius: 0,
            padding: 0,
            minWidth: 1410,
          },
        }}
        closeTimeoutMS={200}
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
