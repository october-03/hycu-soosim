import React, { ComponentProps } from "react";

export default function CustomText({ msg, fontType, ...props }: propsType) {
  const findFont = () => {
    if (!fontType) {
      return "default-text";
    } else if (fontType === "bold") {
      return "font-bold";
    } else if (fontType === "extraBold") {
      return "font-extra-bold";
    } else if (fontType === "light") {
      return "font-light";
    }
  };

  return (
    <div {...props.props} className={`${props.props?.className} ${findFont()}`}>
      {msg}
    </div>
  );
}

type propsType = {
  msg: string;
  fontType?: "bold" | "extraBold" | "light";
  props?: ComponentProps<"div">;
};
