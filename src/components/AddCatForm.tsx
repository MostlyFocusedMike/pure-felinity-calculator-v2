import { addCat } from "../catLocalStore";
import type { Cat, CatGender } from "../types";
import { parseTraits } from "../utils";


const placeholder = `Body type: semi-foreign (15)
Body size: medium (13)
Head shape: rounded wedge (11)
Ears: medium size straight (6)
Nose: medium length (15)
Eyes: oval (12)
Eye color: medium grey-green`;

type Props = {
  handleAddCat: (cat: Omit<Cat, 'id'>) => void;
}

export default function AddCatForm({ handleAddCat }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newCat: Omit<Cat, 'id'> = {
      name: formData.get('name') as string,
      gender: formData.get('gender') as CatGender,
      traits: parseTraits(formData.get('rawTraits') as string),
      createdAt: new Date().toISOString(),
      isTestable: false
    }
    console.log('newCat:', newCat);
    handleAddCat(newCat)

    e.currentTarget.reset();
  }

  return <form
    aria-labelledby="add-cat-header"
    onSubmit={handleSubmit}
    className="border rounded w-fit p-2 m-auto"
  >
    <h2 id="add-cat-header" className="text-2xl text-center">Add New Cat</h2>
    <div>
      <label htmlFor="name">Cat Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="border rounded px-2 m-1"
        defaultValue={'tommy'}
      />
    </div>
    <fieldset className="bg-slate-200 p-2">
      <legend>Gender</legend>
      <input type="radio" id="female" name="gender" value="f" required />
      <label htmlFor="female" className="pr-2">Female</label>
      <input type="radio" id="male" name="gender" value="m" defaultChecked />
      <label htmlFor="male">Male</label>
    </fieldset>
    <div className="mt-2">
      <label htmlFor="rawTraits" >What are their traits?</label>
      <textarea id="rawTraits" name="rawTraits" defaultValue={placeholder} className="block border rounded px-2 h-60 w-full" required></textarea>
      <small>Copy the formatted text from the cat page</small>
    </div>
    <button className="border rounded-full px-6 block m-auto mt-4 active:bg-slate-200">Save</button>
  </form >
}