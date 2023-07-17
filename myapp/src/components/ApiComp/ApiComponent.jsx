import React, { useEffect, useState } from "react";
import jsonData from "../ApiComp/api.json";
import DataContext from "./DataContext";
import HomeComponent from "../Home/HomeComponent";

const ApiComponent = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(jsonData)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [data]);
  console.log(data);
  return (
    <DataContext.Provider value={data}>
      <HomeComponent />
    </DataContext.Provider>
  );
};

export default ApiComponent;
