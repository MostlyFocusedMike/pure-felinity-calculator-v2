import { useMemo, useState } from "react"
import type { Cat } from "../types"

type Props = {
  cats: Cat[]
}
export default function CatCombos({ cats }: Props) {
  const [maleCats, femaleCats] = useMemo(() => {
    const maleCats = cats.filter(({ gender }) => gender === 'm')
    const femaleCats = cats.filter(({ gender }) => gender === 'f')
    return [maleCats, femaleCats]
  }, [cats])

  const [formState, setFormState] = useState({
    primaryGender: 'm',
    selectedMales: [maleCats[0]],
    selectedFemales: femaleCats
  });
  const handlePrimaryGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const primaryGender = e.currentTarget.name;
    const newFormState = primaryGender === 'f'
      ? { selectedMales: maleCats, selectedFemales: [femaleCats[0]], primaryGender }
      : { selectedMales: [maleCats[0]], selectedFemales: femaleCats, primaryGender }

    setFormState(newFormState)
  }
  return <section>
    <h2 className="text-4xl mb-4">Cat Combos</h2>
    <form
      className="m-auto border rounded w-fit p-4"
      onSubmit={(e) => e.preventDefault()}
      onChange={() => { }}
    >
      <h3 className="text-2xl mb-2">Select Your Pairings</h3>
      <fieldset className="border rounded p-2 flex justify-center mb-5">
        <legend>Select The Primary Gender</legend>
        <label>
          <input
            type="radio"
            className="mr-1"
            checked={formState.primaryGender === 'm'}
            name='m'
            onChange={handlePrimaryGenderChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            className="ml-3 mr-1"
            checked={formState.primaryGender === 'f'}
            name='f'
            onChange={handlePrimaryGenderChange}
          />
          Female
        </label>
      </fieldset>
      <div className="flex gap-4">
        <fieldset className="border rounded p-2 w-fit">
          <legend>Male Cats</legend>
          {
            maleCats.map(({ id, name }) => {
              return <label key={id} className="block">
                <input
                  type={formState.primaryGender === 'm' ? 'radio' : 'checkbox'}
                  name="boyCats"
                  checked={!!formState.selectedMales.find((cat) => id === cat.id)}
                />
                {name}
              </label>
            })
          }
        </fieldset>

        <fieldset className="border rounded p-2 w-fit">
          <legend>Female Cats</legend>
          {
            femaleCats.map(({ id, name }) => {
              return <label key={id} className="block">
                <input
                  type={formState.primaryGender === 'f' ? 'radio' : 'checkbox'}
                  checked={!!formState.selectedFemales.find((cat) => id === cat.id)}
                  name="girlCats"
                />
                {name}
              </label>
            })
          }
        </fieldset>
      </div>
    </form>
  </section >
}