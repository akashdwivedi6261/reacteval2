import React from "react";
import Input from "./Input";
import { v4 } from "uuid";
import Item from "./Item";
import styles from "./Item.module.css";

export default function ItemList() {
  const [itemList, setItemList] = React.useState([]);
  const [counts, setCountChecked] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [check, setCheck] = React.useState(true);

  const [item, setItem] = React.useState({
    value: "",
    id: v4()
  });
  const onAdd = (newTodo) => {
    setItemList([...itemList, newTodo]);
  };
  const handleDelete = (itemToDetele) => {
    const newList = itemList.filter((item) => itemToDetele.id !== item.id);
    setItemList(newList);
  };
  const handleUpdate = (itemToUpdate) => {
    const newList = itemList.map((todo) => {
      if (todo.id === itemToUpdate.id) {
        return itemToUpdate;
      } else {
        return todo;
      }
    });
    setItemList(newList);
  };
  return (
    <>
      <Input
        itemList={itemList}
        setItemList={setItemList}
        item={item}
        setItem={setItem}
      />
      {itemList.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            setItem={setItem}
            itemList={itemList}
            setItemList={setItemList}
            handleUpdate={handleUpdate}
            count={counts}
            setCountChecked={setCountChecked}
          />
        );
      })}
      <button onClick={() => setShow(!show)}>Show completed to-Dos</button>
      <div className={show ? styles.show : styles.hide}>
        {counts.map((item) => {
          return (
            <div className={styles.align}>
              <input type="checkbox" checked={true} />
              <span>{item}</span>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
}
