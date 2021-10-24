import { Bird, birdsMap } from "../data/birds.ts";

export const getAll = () => {
  return [...birdsMap.values()];
};

export const getById = (id: string) => {
  return birdsMap.get(id);
};

export const post = (payload: Bird) => {
  birdsMap.set(crypto.randomUUID(), payload);
};
