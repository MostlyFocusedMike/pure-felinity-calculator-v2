import { useState } from "react"
import AddCatForm from "./components/AddCatForm"
import CatsList from "./components/CatsList"
import { getCats, setLocalCats } from "./catLocalStore"
import { randomId } from "./utils";
import type { NewCat } from "./types";

function App() {
  const [cats, setCats] = useState(getCats());

  const handleAddCat = (newCat: NewCat) => {
    const newCats = [...cats, { id: randomId(), ...newCat }];
    setLocalCats(newCats)
    setCats(newCats);
  }

  return (
    <>
      <header className="">
        <hgroup>
          <h1>Pure Felinity Cat Breed Calculator</h1>
          <p>Calculate the best match ups!</p>
        </hgroup>
      </header>
      <main>


        <AddCatForm handleAddCat={handleAddCat} />
        <CatsList cats={cats} />
      </main>
    </>
  )
}

export default App
