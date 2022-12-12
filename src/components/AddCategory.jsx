import { useState } from "react";
import Proptypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Search Gifs"
      />
    </form>
  );
};

AddCategory.proptypes = {
  onNewCategory: Proptypes.func.isRequired,
};
