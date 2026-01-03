import { useMemo, useState } from "react";
import type { Cat } from "../types";

const ALL = 'All';
const BOYS = 'Boys';
const GIRLS = 'Girls';
const HIDE = 'Hide';

type Props = {
  cats: Cat[];
  handleRemoveCat: (id: string) => void;
}
export default function CatsList({ cats, handleRemoveCat }: Props) {
  const [filter, setFilter] = useState(ALL)
  const filteredCats = useMemo(() => {
    if (filter === BOYS) return cats.filter(({ gender }) => gender === 'm');
    if (filter === GIRLS) return cats.filter(({ gender }) => gender === 'f');
    if (filter === HIDE) return [];
    return cats
  }, [cats, filter])

  return <section className="bg-neutral-900 p-4 my-4">
    <h2 className="text-4xl my-2">Current Cats</h2>
    <button className="border rounded-l-full px-4" onClick={() => setFilter(ALL)}>Show All</button>
    <button className="border rounded-none px-4" onClick={() => setFilter(BOYS)}>{BOYS}</button>
    <button className="border px-4" onClick={() => setFilter(GIRLS)}>{GIRLS}</button>

    <button className="border rounded-r-full px-4 mb-2" onClick={() => setFilter(HIDE)}>Hide All</button>

    <ul className="flex flex-wrap justify-center gap-3 p-2 ">
      {
        filteredCats.map(({ id, createdAt, name, traits, gender }) => {
          const [bodyType, bodySize, headShape, ears, nose, eyes, eyeColor] = traits;
          const isBoy = gender === 'm';

          return <li
            key={id}
            className={`bg-zinc-700 p-4 border rounded text-center ${isBoy ? 'border-blue-950' : 'border-pink-950'}`}
          >
            <h3 className="text-2xl italic">{name}</h3>
            <p>Gender: {gender === 'm' ? 'Male' : 'Female'}</p>
            <ul className="">
              <li>Body type: {bodyType}</li>
              <li>Body Size: {bodySize}</li>
              <li>Head Shape: {headShape}</li>
              <li>Ears: {ears}</li>
              <li>Nose: {nose}</li>
              <li>Eyes: {eyes}</li>
              <li>Eye Type: {eyeColor}</li>
            </ul>
            <p>Born: {createdAt ? new Date(createdAt).toLocaleDateString() : '-'}</p>
            <button
              className="border rounded-l-full px-4 mt-2 "
              onClick={() => handleRemoveCat(id)}
            >Remove</button>
            <button className="border rounded-r-full px-4 mt-2">Edit</button>
          </li>
        })
      }
    </ul>
  </section>
}