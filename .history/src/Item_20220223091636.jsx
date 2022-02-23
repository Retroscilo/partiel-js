import React from "react"

const Item = ({ item }) => {
  console.log(item)
  return (
    <div> <input type="checkbox" />{item}</div>
  )
}

export default Item