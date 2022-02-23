import React from "react"

const Item = ({ item }) => {
  console.log(item)
  return (
    <div style={{ display: "flex", alignItems: "center" }}> <input type="checkbox" />{item}</div>
  )
}

export default Item