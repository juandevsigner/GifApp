import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState([""]);

  const onNewCategory = category => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={category => onNewCategory(category)} />
      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
