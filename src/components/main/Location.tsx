import React from "react";
import MainTitleLayout from "../module/MainTitleLayout";
import map from "../../image/svg/Map.svg";

export default function Location() {
  return (
    <MainTitleLayout title="LOCATION" color="#82969f">
      <img src={map} alt="" style={{ width: "100%", marginTop: 60 }} />
    </MainTitleLayout>
  );
}
