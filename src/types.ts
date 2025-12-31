export type CatGender = 'm' | 'f';

export type Cat = {
  id: string;
  gender: CatGender;
  name: string;
  isTestable: boolean;
  createdAt?: string;
  traits: number[];
}

export type NewCat = Omit<Cat, 'id'>

export type FormCat = Omit<Cat, 'traits' >;