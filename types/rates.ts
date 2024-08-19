export type ConvertRateResponse = {
  amount: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
  message: string;
};

export type SymbolsRateResponse = {
  [key: string]: string;
};
