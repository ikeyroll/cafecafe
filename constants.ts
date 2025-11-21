import { MenuCategory, MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Drinks
  {
    id: 'd1',
    name: 'Kopi O Kaw',
    description: 'Strong black coffee with sugar, traditionally brewed.',
    price: 3.50,
    category: MenuCategory.DRINKS,
    image: 'https://picsum.photos/id/425/300/300',
    popular: true
  },
  {
    id: 'd2',
    name: 'Teh Tarik',
    description: 'Pulled milk tea with a frothy top. A Malaysian icon.',
    price: 3.50,
    category: MenuCategory.DRINKS,
    image: 'https://picsum.photos/id/429/300/300',
    popular: true
  },
  {
    id: 'd3',
    name: 'Cham C',
    description: 'Mixture of coffee and tea with evaporated milk.',
    price: 3.80,
    category: MenuCategory.DRINKS,
    image: 'https://picsum.photos/id/63/300/300'
  },
  {
    id: 'd4',
    name: 'Milo Dinosaur',
    description: 'Iced Milo topped with a mountain of Milo powder.',
    price: 6.50,
    category: MenuCategory.DRINKS,
    image: 'https://picsum.photos/id/225/300/300'
  },
  {
    id: 'd5',
    name: 'Ice Lemon Tea',
    description: 'Refreshing homemade brewed tea with fresh lemon.',
    price: 4.50,
    category: MenuCategory.DRINKS,
    image: 'https://picsum.photos/id/821/300/300'
  },

  // Breakfast
  {
    id: 'b1',
    name: 'Classic Kaya Butter Toast',
    description: 'Crispy charcoal-toasted bread with homemade kaya and cold butter.',
    price: 4.50,
    category: MenuCategory.BREAKFAST,
    image: 'https://picsum.photos/id/835/300/300',
    popular: true
  },
  {
    id: 'b2',
    name: 'Half Boiled Eggs (2 pcs)',
    description: 'Perfectly soft eggs served with soy sauce and white pepper.',
    price: 3.00,
    category: MenuCategory.BREAKFAST,
    image: 'https://picsum.photos/id/113/300/300'
  },
  {
    id: 'b3',
    name: 'Nasi Lemak Bungkus',
    description: 'Fragrant coconut rice, sambal, anchovies, peanuts, and egg wrapped in banana leaf.',
    price: 3.50,
    category: MenuCategory.BREAKFAST,
    image: 'https://picsum.photos/id/493/300/300',
    popular: true
  },
  {
    id: 'b4',
    name: 'Roti Canai Mini Platter',
    description: '3 pieces of mini roti canai served with dhal and sambal.',
    price: 5.00,
    category: MenuCategory.BREAKFAST,
    image: 'https://picsum.photos/id/703/300/300'
  },

  // Meals
  {
    id: 'm1',
    name: 'Mee Goreng Mamak',
    description: 'Spicy fried yellow noodles with tofu, potatoes, and lime.',
    price: 10.90,
    category: MenuCategory.MEALS,
    image: 'https://picsum.photos/id/95/300/300'
  },
  {
    id: 'm2',
    name: 'Nasi Ayam Hainan',
    description: 'Tender steamed chicken served with fragrant rice and chilli garlic sauce.',
    price: 12.90,
    category: MenuCategory.MEALS,
    image: 'https://picsum.photos/id/80/300/300',
    popular: true
  },
  {
    id: 'm3',
    name: 'Laksa Johor',
    description: 'Spaghetti in a rich, spicy fish gravy with fresh condiments.',
    price: 14.90,
    category: MenuCategory.MEALS,
    image: 'https://picsum.photos/id/365/300/300'
  },
  {
    id: 'm4',
    name: 'Kopitiam Chicken Chop',
    description: 'Deep-fried chicken thigh with brown sauce, potato wedges, and coleslaw.',
    price: 18.90,
    category: MenuCategory.MEALS,
    image: 'https://picsum.photos/id/292/300/300'
  },

  // Snacks
  {
    id: 's1',
    name: 'Curry Puff (3 pcs)',
    description: 'Flaky pastry filled with spiced potatoes and egg.',
    price: 4.50,
    category: MenuCategory.SNACKS,
    image: 'https://picsum.photos/id/760/300/300'
  },
  {
    id: 's2',
    name: 'Pisang Goreng with Ice Cream',
    description: 'Hot crispy banana fritters served with vanilla ice cream.',
    price: 8.90,
    category: MenuCategory.SNACKS,
    image: 'https://picsum.photos/id/439/300/300'
  },
  {
    id: 's3',
    name: 'ABC Ice Kacang',
    description: 'Shaved ice with syrup, red beans, corn, and jelly.',
    price: 6.50,
    category: MenuCategory.SNACKS,
    image: 'https://picsum.photos/id/443/300/300'
  },
  {
    id: 's4',
    name: 'Cendol',
    description: 'Green rice flour jelly, coconut milk and palm sugar syrup.',
    price: 5.50,
    category: MenuCategory.SNACKS,
    image: 'https://picsum.photos/id/447/300/300'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Lim',
    comment: "Best kaya toast in town! The butter just melts perfectly. Sangat original.",
    rating: 5,
    date: '2 days ago'
  },
  {
    id: 'r2',
    name: 'Ahmad Zaki',
    comment: "Feels like childhood kopitiam. Love the ambiance and the kopi is padu!",
    rating: 5,
    date: '1 week ago'
  },
  {
    id: 'r3',
    name: 'John Doe (Tourist)',
    comment: "A hidden gem. The Nasi Lemak was spicy but delicious. Staff is very friendly.",
    rating: 4,
    date: '2 weeks ago'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 'g1', src: 'https://picsum.photos/id/435/600/400', alt: 'Making Coffee' },
  { id: 'g2', src: 'https://picsum.photos/id/365/600/400', alt: 'Serving Food' },
  { id: 'g3', src: 'https://picsum.photos/id/225/600/400', alt: 'Cafe Interior' },
  { id: 'g4', src: 'https://picsum.photos/id/102/600/400', alt: 'Fruit Platter' },
  { id: 'g5', src: 'https://picsum.photos/id/75/600/400', alt: 'Table Setting' },
  { id: 'g6', src: 'https://picsum.photos/id/63/600/400', alt: 'Busy Morning' },
];