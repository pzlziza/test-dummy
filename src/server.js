import express from "express";
import { getUsers } from "./handler/userh.js";
import { getGestures } from "./handler/gestureh.js";
import { getMl } from "./handler/mldatah.js";

const app = express();

const PORT = 5000;

app.get("/users", (req, res) => {
  const data = getUsers();
  res.status(200).json({ msg: "Ambil data user", data });
});

app.get("/gestures", (req, res) => {
  const data = getGestures();
  res.status(200).json({ msg: "Ambil data dari gesture", data });
});

app.get("/ml", (req, res) => {
  const data = getMl();
  res.status(200).json({ msg: "Ambil data dari mldb", data });
});

app.listen(PORT, () => {
  console.log("Server run on port", PORT);
});
