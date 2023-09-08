const express = require("express");
// import express from "express";
const snk = require("./cmp1.ts");
// import snk from "./cmp1.ts";
// var jwt = require("jsonwebtoken");

// const { generateKeyPair } = require('crypto');

// var token = jwt.sign(
//   { foo: "bar" },
//   "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",
//   { algorithm: "RS256" }
// );
const jwt = require("njwt");

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  // res.send("Hello World!" + snk.soma.sina()+snk.soma.a);

  // generateKeyPair('rsa', {
  //   modulusLength: 4096,
  //   publicKeyEncoding: {
  //     type: 'spki',
  //     format: 'pem'
  //   },
  //   privateKeyEncoding: {
  //     type: 'pkcs8',
  //     format: 'pem',
  //     cipher: 'aes-256-cbc',
  //     passphrase: 'top secret'
  //   }
  // }, (err:any, publicKey:any, privateKey:any) => {
  //   console.log("Error: ",err);
  //   console.log("Public: ",publicKey);
  //   console.log("Private: ",privateKey);

  //   // res.send(publicKey);
  //   res.send(privateKey);
  // });
  const claims = { iss: "fun-with-jwts", sub: "AzureDiamond" };
  const token = jwt.create(claims, "top-secret-phrase");
  token.setExpiration(new Date().getTime() + 60 * 1000);
  res.send(token.compact());
  // res.send(token);
});

//https://developer.okta.com/blog/2018/11/13/create-and-verify-jwts-with-node

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
