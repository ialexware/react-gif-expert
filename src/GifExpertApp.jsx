import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);

    if (categories.includes(newCategory)) return;

    setcategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onAddCategory={(newCategory) => onAddCategory(newCategory)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

// kdNJ54DIVz8APJEuvL5AWGif0N0kSvuP
