import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailCompo from "../components/detail/DetailCompo";
import Loading from "../components/detail/Loading";
import CustomText from "../components/module/CustomText";
import { memberType } from "../types/dataType";

export default function Detail({ close, data }: propsType) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);
  // return ;
  return (
    <>
      {loading ? <DetailCompo data={data} closeModal={close} /> : <Loading />}
    </>
  );
}

type propsType = {
  close: () => void;
  data: memberType;
};
