export enum MenuCategory {
  DRINKS = 'Drinks',
  BREAKFAST = 'Breakfast',
  MEALS = 'Local Meals',
  SNACKS = 'Snacks & Desserts'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  comment: string;
  rating: number;
  date: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
}