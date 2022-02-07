import React from "react";
import styles from "./Item.module.css";
export default function Item({ item, handleDelete, setCountChecked, count }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const countChecked = (value) => {
    if (isChecked === false) {
      setCountChecked([...count, item.value]);
      setIsChecked(!isChecked);
    }
  };
  return (
    <>
      <div className={styles.main}>
        {isEdit ? (
          <input type="text" />
        ) : (
          <>
            {" "}
            <input
              type="checkbox"
              onChange={(e) => countChecked(e.target.value)}
            />
            <span className={isChecked ? styles.line : styles.none}>
              {item.value}
            </span>
          </>
        )}
        <button onClick={() => handleDelete(item)}>Delete</button>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      </div>
    </>
  );
}
