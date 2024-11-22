import fs from "node:fs";

const mainlink = "./db/user.json";

export const getUsers = () => {
  const dataPaylod = fs.readFileSync(mainlink);
  const data = JSON.parse(dataPaylod);
  return data;
};
