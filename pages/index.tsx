import type { NextPage } from "next";

import React from "react";
import Cards from "../components/Cards";
import SearchForm from "../components/SearchForm";

const userInfos = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Bob" },
];

const Home: NextPage = () => {
  // const onSubmit = (value: string) =>{
  //   console.log(value)
  // }
  return (
    // <div>
    //   <SearchForm onSubmit={onSubmit} />
    // </div>
    <Cards userInfos={userInfos} />
  );
};

export default Home;
