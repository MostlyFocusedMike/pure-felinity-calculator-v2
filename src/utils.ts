const parseEye = (traitStr: string) => {
  if (traitStr.includes('pale')) return 1;
  if (traitStr.includes('medium')) return 2;
  if (traitStr.includes('deep')) return 3;
  return 1;
}

export const parseTraits = (traitsStr: string) => {
  const rawArr = traitsStr.toLowerCase().trim().split('\n')
  return rawArr.map((traitStr, idx) => {
    if (idx === rawArr.length - 1) return parseEye(traitStr);

    const match = traitStr.match(/\((\d+)\)/);
    return parseInt(match![1]);
  })
}

export const randomId = (idLength = 4) => {
  const randomLetters = [];
  for (let i = 0; i < idLength; i++) {
    const char = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    randomLetters.push(char);
  }
  return `${randomLetters.join('')}-${Date.now()}`;
};

// export default function handleAddCat(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const formCat = Object.fromEntries(formData);

//   const newCat: Cat = {
//     traits: parseTraits(formData.get('rawTraits') as string),
//     isTestable: false,
//     createdAt: new Date().toISOString(),
//   }
//   formCat.traits =
//   formCat.isTestable = false;
//   formCat.createdAt = .toISOString()
//   console.log('newCat:', formCat);

//   // addCat(newCat);
//   e.target.reset();

// };