export interface IProduct {
  id: number,
  name: string,
  amount: string
}

export interface IUser {
  username: string,
  vocation: string,
  level: number,
  password: string,
}
  
export interface IToken {
  token: string,
}
  
export interface IPayload {
  id: number,
  username: string,
}

export interface IOrder {
  id: number,
  userId: number,
  productsIds: number[]
}