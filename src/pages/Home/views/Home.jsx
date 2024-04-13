import React from "react";
import CardHeader from "../component/cardHeader/CardHeader";
import ProductCard from "../component/ProductCard/ProductCard";
import CategoryCard from "../component/categorycard/CategoryCard";

const Home = () => {
  return (
    <>
      <CardHeader title={"Today's"} subtitle={"Flash Sales"} timer={true} />
      <div class="m-auto w-[85%] flex overflow-x-auto gap-[30px]  ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <CardHeader
        title={"Category"}
        subtitle={"Browse by Category"}
        timer={false}
      />
      <CategoryCard />
    </>
  );
};

export default Home;
