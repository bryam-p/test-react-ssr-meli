export interface DataFetch {
  data: SearchInterface;
  loading: boolean;
}

export interface SearchInterface {
  author: Author;
  query: string;
  categories: Categories;
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Price {
  amount: number;
  currency: string;
}

interface Categories {
  id: string;
  values: Value[];
}

export interface Value {
  id: string;
  name: string;
}

interface Author {
  name: string;
  lastname: string;
}
