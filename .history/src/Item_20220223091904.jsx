import React, { useState } from "react";

const Item = ({ item }) => {
  const [isCheck, setIsCheck]  =useState(false)
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" />
      {item}
    </div>
  );
};

export default Item;
