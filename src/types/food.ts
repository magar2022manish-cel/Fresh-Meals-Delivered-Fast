export interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  deliveryTime: string;
  calories: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  favoriteDish: string;
}
