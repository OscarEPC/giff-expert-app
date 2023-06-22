import { useState } from "react"

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const handleAdd = () => {
    setCategories(prevState => ['Naruto', ...prevState])
  }

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {/* <button onClick={handleAdd}>Add</button> */}
      {categories.map(category => <GifGrid key={category} category={category} />)}
    </>
  )
}
