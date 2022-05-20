export interface DataFetchItemProduct {
  data: ItemProduct;
  loading: boolean;
}

interface ItemProduct {
  author: Author;
  item: Item;
  categories: Category[];
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface Category {
  id: string;
  name: string;
}

interface Item {
  id: string;
  title: string;
  price: Price;
}

interface Price {
  currency: string;
  amount: number;
}

interface Author {
  name: string;
  lastname: string;
}
