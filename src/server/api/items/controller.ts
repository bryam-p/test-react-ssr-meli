import { getData } from "../../utils/getData";

export const getById = async (id: string) => {
  const data = await getData(`https://api.mercadolibre.com/items/${id}`);

  if (data.error) {
    return "error";
  }

  const newData = {
    author: {
      name: "Bryam",
      lastname: "Piñeros",
    },
    item: {
      id: data?.id,
      title: data?.title,
      price: {
        currency: data?.currency_id,
        amount: data?.price,
      },
    },
    categories: await findCategoryById(data?.category_id),
    picture: data?.pictures[0]?.url,
    condition: data?.condition,
    free_shipping: data?.shipping?.free_shipping,
    sold_quantity: data?.sold_quantity,
    description: await getItemDescription(id),
  };
  return newData;
};

const getItemDescription = async (id: string) => {
  const data = await getData(
    `https://api.mercadolibre.com/items/${id}/description`
  );

  return data?.plain_text;
};

const findCategoryById = async (id: string) => {
  const data = await getData(`https://api.mercadolibre.com/categories/${id}`);
  return data?.path_from_root;
};
