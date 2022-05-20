import { useState, useEffect } from "react";
import { getData } from "../utils/getData";
import { ItemProduct, DataFetchItemProduct } from "../types/item-product";

export const useFetchProduct = (url: string, change?: string) => {
  const [state, setState] = useState({
    data: {} as ItemProduct,
    loading: true,
  } as DataFetchItemProduct);

  useEffect(() => {
    getData(url).then((data) => {
      setState({ data: data, loading: false });
    });
  }, [change]);

  return state;
};
