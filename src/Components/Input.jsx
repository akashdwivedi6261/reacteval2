import React from "react";
import { v4 } from "uuid";
export default function Input({ itemList, setItemList, item, setItem }) {
  const handleAdd = () => {
    setItemList([...itemList, item]);
    console.log(itemList);
    setItem({ ...item, value: "" });
  };
  return (
    <>
      <input
        placeholder="Type something"
        value={item.value}
        onChange={(e) => setItem({ ...item, value: e.target.value, id: v4() })}
      />
      <button onClick={handleAdd}>Add item</button>
    </>
  );
}
