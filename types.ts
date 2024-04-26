export interface Businesses {
  id: string;
  price: string;
  name: string;
  image_url: string;
  rating: string;
  review_count: string;
}

export interface SingleBusiness {
  alias?: string;
  categories?: Category[];
  coordinates?: Coordinates;
  displayPhone?: string;
  hours?: Hour[];
  id?: string;
  imageURL?: string;
  isClaimed?: boolean;
  isClosed?: boolean;
  location?: Location;
  messaging?: Messaging;
  name?: string;
  phone?: string;
  photos?: string[];
  price?: string;
  rating?: number;
  reviewCount?: number;
  transactions?: string[];
  url?: string;
}

export interface Category {
  alias?: string;
  title?: string;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Hour {
  hoursType?: string;
  isOpenNow?: boolean;
  open?: Open[];
}

export interface Open {
  isOvernight?: boolean;
  start?: string;
  end?: string;
  day?: number;
}

export interface Location {
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  country?: string;
  crossStreets?: string;
  displayAddress?: string[];
  state?: string;
  zipCode?: string;
}

export interface Messaging {
  url?: string;
  useCaseText?: string;
}
