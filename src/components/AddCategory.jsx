import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 0) {
      return;
    }

    console.log(value);
    // onAddCategory((categories) => [inputValue, ...categories]);
    onAddCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};
