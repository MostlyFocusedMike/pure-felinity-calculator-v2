import { useState } from "react"
import AddCatForm from "./components/AddCatForm"
import CatsList from "./components/CatsList"
import { getCats, setLocalCats } from "./catLocalStore"
import { randomId } from "./utils";
import type { Cat, NewCat } from "./types";

function App() {
  const [cats, setCats] = useState(getCats());

  const handleSetCats = (newCats: Cat[]) => {
    setLocalCats(newCats)
    setCats(newCats);
  }

  const handleAddCat = (newCat: NewCat) => {
    handleSetCats([...cats, { id: randomId(), ...newCat }])
  }

  const handleRemoveCat = (catId: string) => {
    handleSetCats(cats.filter(({ id }) => id !== catId))
  }


  return (
    <div className="bg-neutral-800 text-stone-300">
      <header className="">
        <hgroup>
          <h1>Pure Felinity Cat Breed Calculator</h1>
          <p>Calculate the best match ups!</p>
        </hgroup>
      </header>

      <main>
        <AddCatForm handleAddCat={handleAddCat} />
        <CatsList cats={cats} handleRemoveCat={handleRemoveCat} />
      </main>
    </div>
  )
}

export default App
