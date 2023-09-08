const express = require("express");
// import express from "express";
// const snk = require("./cmp1.ts");
import cmp1 from './cmp1';
const jwt = require("njwt");

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  const claims = {
    iss: "fun-with-jwts",
    sub: "AzureDiamond",
    name: "Sina",
    fmly: "Kordestani",
  };
  const token = jwt.create(claims, "your-256-bit-secret", "HS256");
  token.setExpiration(new Date().getTime() + 60 * 1000); //By Milliseconds
  res.send(token.compact());
});

app.use((req: any, res: any, next: any) => {
  next();
});

app.use("/verify/:id", (req: any, res: any, next: any) => {
  if (String(req.params.id).toLowerCase()==="sina") {
    res.send("Hello Mr.Sina "+cmp1.soma.sina());
  } else {
  }
  next();
});

app.get("/verify/:id", (req: any, res: any) => {
  // res.send(req.query.id);
  // res.send(req.params.id);

  const token = req.params.id;
  jwt.verify(
    token,
    "your-256-bit-secret",
    "HS256",
    (err: any, verifiedJwt: any) => {
      if (err) {
        res.send("Error: " + err.message);
      } else {
        res.send(verifiedJwt.body.name + " " + verifiedJwt.body.fmly);
      }
    }
  );
});

//https://developer.okta.com/blog/2018/11/13/create-and-verify-jwts-with-node

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
