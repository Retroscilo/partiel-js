import React, { useState } from "react";

const Item = ({ item }) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: '10px' }}>
      <input onChange={() => setIsCheck(!isCheck)} type="checkbox" />
      <p style={{ textDecoration: isCheck ? 'line-through' : 'none', margin: 0 }}>{item}</p>
    </div>
  );
};

export default Item;
