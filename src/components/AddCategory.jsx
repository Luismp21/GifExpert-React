import { useState } from "react";

export const AddCategory = ({ onNewCategory,  }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="flex justify-center mb-10">
      <form className="w-full md:w-1/2 mx-6 " onSubmit={handleSubmit}>
        <input
          className="border-2 w-full p-2 m-2 placeholder-gray-500 rounded-md"
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};
