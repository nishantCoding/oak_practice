export interface Bird {
  id: string;
  name: string;
  lifespanInYrs: number;
  canFly: boolean;
}

export const birdsMap: Map<string, Bird> = new Map();

const birdsList: string[] = ["Sparrow", "Peacock"];
birdsList.forEach((bird) => {
  const id = crypto.randomUUID();
  birdsMap.set(id, { id: id, name: bird, lifespanInYrs: 5, canFly: true });
});
