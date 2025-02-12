import React from "react";
import Person from "./Components/Person";
import Product from "./Components/Product";

export default function App() {
  const person = { name: "MEET", age: 20 };
  const product = { name: "VITAMIN-C", price: "$120000" };
  return (
    <>
      <Person person={person} />
      <Product product={product} />
    </>
  );
}
