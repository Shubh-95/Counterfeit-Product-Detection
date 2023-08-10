import contract from "@truffle/contract";
import React from "react";
import { ReactDOM } from "react";

const LoadContract = async (name, provider) => {
  const res = await fetch(`/contracts/${name}.json`);
  const Artifact = await res.json();
  const _contract = contract(Artifact);
  _contract.setProvider(provider);
  const deployedContract = await _contract.deployed();
  return deployedContract;
};

export default LoadContract;
