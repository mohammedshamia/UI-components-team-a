import React from "react";
import Card from "../../Components/Card";
import BasicCard from "../../Components/Card/basicCard";
import ComplexCard from "../../Components/Card/complexCard";
import ProductCard from "../../Components/Card/productCard";

export default function CardPage() {
  return (
    <>
      <BasicCard />
      <ComplexCard />
      <ProductCard />
    </>
  );
}
