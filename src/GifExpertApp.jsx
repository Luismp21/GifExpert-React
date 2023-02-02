import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter X"]);
  const onAddCategory = (onAddCategory) => {
    if (categories.includes(onAddCategory)) return;
    setCategories([onAddCategory]);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-5xl font-bold text-center py-10">GifExpertApp</h1>

        <AddCategory
          onNewCategory={onAddCategory}
          setCategories={setCategories}
        />
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
