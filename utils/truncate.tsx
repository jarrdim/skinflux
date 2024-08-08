import React from "react";

const truncate = (str: string) => {
  if (str.length < 30) return str;

  return str.substring(0, 30) + "...";
};

export default truncate;
