export interface IRoomPhoto {
  id: string;
  file: string;
  description: string;
}

export interface IRoomList {
  id: number;
  title: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IRoomPhoto[];
}

export interface IRoomOwner {
  username: string;
  avatar: string;
  email: string;
}

export interface IAmenity {
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  created_at: string;
  updated_at: string;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: true;
  kind: string;
  is_owner: boolean;
  is_liked: boolean;
  category: {
    name: string;
    kind: string;
  };
  owner: IRoomOwner;
  amenities: IAmenity[];
}

export interface IRoomReview {
  id: number;
  user: IRoomOwner;
  payload: string;
  rating: number;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  is_host: boolean;
  gender: string;
  language: string;
  currency: string;
}
