export type ConvertRateResponse = RateResponse & {
  query: QueryResponse,
  info: InfoResponse,
  date: string,
  result: number,
}

export type SymbolsRateResponse = RateResponse & {
  symbols: {
    [key: string]: string
  }
}

type RateResponse = {
  success: boolean,
  error: ErrorResponse,
}

type InfoResponse = {
  timestamp: number,
  rate: number
}

type QueryResponse = {
  from: string,
  to: string,
  amount: number
}

type ErrorResponse = {
  code: number,
  info: string
}
