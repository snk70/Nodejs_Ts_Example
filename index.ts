const express = require('express');
// import express from "express";
const snk = require('./cmp1.ts');
// import snk from "./cmp1.ts";

const app = express();
const port = 3000;



app.get("/", (req:any, res:any) => {
  res.send("Hello World!" + snk.soma.sina()+snk.soma.a);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
