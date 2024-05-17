import React from "react";
import Table from "./HomeTable";
import HomeTable from "./HomeTable";
import Tabs from "./Tabs";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((store) => store.header.headerData);
  return <div className="border ">{selector && <Tabs />}</div>;
};

export default Home;
