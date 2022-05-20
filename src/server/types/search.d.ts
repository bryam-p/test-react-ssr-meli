export interface Result {
  id: string;
  title: string;
  prices: Price;
  shipping: Shipping;
  thumbnail: string;
  condition: string;
}

interface Shipping {
  free_shipping: boolean;
}

interface Price {
  prices: PriceSecond[];
}

interface PriceSecond {
  amount: number;
  currency_id: string;
}

export interface Filters {
  id: string;
  values: Values[];
}

interface Values {
  values: string;
  path_from_root: string;
}
