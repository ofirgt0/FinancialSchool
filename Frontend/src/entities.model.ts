export interface stock {
  id: number;
  name: string;
  currentPrice: number;
  amount: number;
  currentStockAmountInBurse: number;
  percentageDifference: number[];
  imgUrl?: string;
}
export interface stockWithAmount {
  stock: stock;
  amount: number;

}
export interface dealler {
  id: number;
  name: string;
  moneyAtOpening: number;
  currMoney: number;
  ownedStocks: Array<stockWithAmount>;
  ownedStocksAmount:number;
}

export interface Offer {
  deallerName: string;
  stockName: string;
  wantedPrice: number;
  wantedAmount: number;
  type: number;
}

export interface Deal{
  seller:string;
  buyer :string;
  price:number;
  amount:number;
  stockName:string;
  dealTime:any;
}
export enum ActionPerformedType
{
    WasFullyExecuted,
    WasPartiallyExecuted,
    WasNotExecutedNewOfferHasUploaded,
    WasNotExecutedOfferNotPossible
}
export interface MakeADealResponse
{
    quantityRemaining:number;
    action:ActionPerformedType ;
}
export interface HoldingsWorth
{
    totalWorth:number;
    ownedStockWorth:any;
    moneyAtOpening:number ;
    currMoney:number;
}

//----------------------------------------------------------------------------

export interface Teacher{
  id:number;
  name:string;
  password: string;
  class: string;
}

export interface Class{
  name: string;
  level: number;
  currentCurrency: number;
  teacher:string;
}

export interface Coin{
  coinName: string;
  coinId: string;
  worth: number;
}

export interface History{
  date:any;
  transactionType:string;
  historyType:string;
  isPositive:boolean;
}

export interface Product{
  id: number;
  title: string;
  description: string;
  price: number;
}