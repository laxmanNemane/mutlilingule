import React, { useEffect, useState } from "react";
import initializeAxios from "./Axios";
import axios from "axios";

const Hello = () => {
  const [data, setData] = useState();

  useEffect(() => {
    initializeAxios();

    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products/1");
        setData(res.data);
        console.log(res, "hello we got resp");
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{data?.title}</div>;
};

export default Hello;
