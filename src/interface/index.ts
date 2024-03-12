export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  bio: string;
  profile_photo: string;
  canAnalyze: boolean;
  isBlocked: boolean;
  score: string;
  isAdmin: boolean;
  isFollowing: boolean;
  isAccountVerified: boolean;
  refresh_token: string;
  viewedBy: string[];
  followers: string[];
  following: string[];
  token:string
}

export interface IJwtPayload {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  bio: string;
  isAdmin: boolean;
}

export type TUser = Partial<IUser>;

export interface ICoin {
  _id: string;
  id: string;
  symbol: "string";
  name: "string";
  image: "string";
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: object;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export type TCoin = Partial<ICoin>;

export interface IUserInfo {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string; 
  isAdmin: boolean;
  bio: string;
  iat: number;
  exp: number;
}
