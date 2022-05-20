import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { DataFetch, SearchInterface } from "../types/search";
//@ts-ignore
import imageDefault from "../assets/image-default.png";

export const useFetchSearch = (query: string) => {
  const [state, setState] = useState({
    data: {
      author: {
        name: "...",
        lastname: "...",
      },
      query: "",
      categories: {
        id: "",
        values: [
          {
            id: "0",
            name: "",
          },
        ],
      },
      items: [
        {
          id: "",
          title: "...",
          price: {},
          picture: imageDefault,
          condition: "...",
          free_shipping: false,
        },
      ],
    } as SearchInterface,
    loading: true,
  } as DataFetch);

  useEffect(() => {
    getData(`/api/items?q=${query}`).then((data) => {
      setState({ data: data, loading: false });
    });
  }, [query]);

  return state;
};
