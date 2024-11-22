import fs from "node:fs";

const mainlink = "./db/gesture.json";

export const getGestures = () => {
  const dataPaylod = fs.readFileSync(mainlink);
  const data = JSON.parse(dataPaylod);
  return data;
};
