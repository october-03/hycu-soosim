import React from "react";
import { Data } from "../../Data";
import MainTitleLayout from "../module/MainTitleLayout";
import PhotoProfile from "../module/PhotoProfile";

export default function Professors() {
  return (
    <MainTitleLayout title="PROFESSORS" color="#00aee9">
      <div
        style={{
          flex: 1,
          marginTop: 50,
        }}
        className="grid-container"
      >
        {Data.professor.map((item, index) => {
          return (
            <PhotoProfile data={item} color={"#acacac"} professor={true} />
          );
        })}
      </div>
    </MainTitleLayout>
  );
}
