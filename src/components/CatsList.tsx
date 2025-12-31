import { getCats } from "../catLocalStore";
import type { Cat } from "../types";

export default function CatsList({ cats }: { cats: Cat[] }) {
  return <section>
    <h2 className="text-4xl mt-2">Current Cats</h2>
    <ul className="flex flex-wrap justify-center gap-2 p-2 ">
      {
        cats.map(({ id, createdAt, name, traits, gender }) => {
          const [bodyType, bodySize, headShape, ears, nose, eyes, eyeColor] = traits;
          return <li key={id} className="border p-2 rounded w-50 text-center">
            <h3 className="text-2xl italic">{name}</h3>
            <ul>
              <li>Gender: {gender === 'm' ? 'Male' : 'Female'}</li>
              <li>Body type: {bodyType}</li>
              <li>Body Size: {bodySize}</li>
              <li>Head Shape: {headShape}</li>
              <li>Ears: {ears}</li>
              <li>Nose: {nose}</li>
              <li>Eyes: {eyes}</li>
              <li>Eye Color: {eyeColor}</li>
              <li>Birthday: {createdAt ? new Date(createdAt).toLocaleDateString() : '?'}</li>
            </ul>
            <button className="border rounded-l-full px-4 mt-2 ">Remove</button>
            <button className="border rounded-r-full px-4 mt-2">Edit</button>
          </li>
        })
      }
    </ul>
  </section>
}