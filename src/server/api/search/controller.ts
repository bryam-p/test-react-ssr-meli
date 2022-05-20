import { getData } from "../../utils/getData";
import { Result, Filters } from "../../types/search";

export const findByQuery = async (param: string) => {
  const data = await getData(
    `https://api.mercadolibre.com/sites/MLA/search?q=${param}`
  );

  const { results, filters, query } = data;

  const newData = {
    author: {
      name: "Bryam",
      lastname: "Piñeros",
    },
    query: query as string,
    categories: getCategories(filters),
    items: getItems(results),
  };
  return newData;
};

const getCategories = (filters: Filters[]) => {
  return {
    id: filters[0]?.id,
    values: filters[0]?.values[0]?.path_from_root,
  };
};

const getItems = (results: Result[]) => {
  const items = results.map((result) => {
    return {
      id: result.id,
      title: result.title,
      price: {
        amount: result.prices.prices[0]?.amount,
        currency: result?.prices?.prices[0]?.currency_id,
      },
      picture: result?.thumbnail,
      condition: result?.condition,
      free_shipping: result?.shipping?.free_shipping,
    };
  });
  return items.slice(0, 4);
};
