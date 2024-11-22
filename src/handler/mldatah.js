import fs from "node:fs";

const mainlink = "./db/mldata.json";

export const getMl = () => {
  const dataPaylod = fs.readFileSync(mainlink);
  const data = JSON.parse(dataPaylod);
  return data;
};
