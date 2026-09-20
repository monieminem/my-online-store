export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "physical" | "digital";
  badge?: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    description: "Premium noise-cancelling earbuds with 40h battery. Perfect for work and travel. Dropshipped from trusted supplier.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
    category: "physical",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "2",
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port. Stylish and functional.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=600&fit=crop",
    category: "physical",
    featured: true,
  },
  {
    id: "3",
    name: "AI Productivity eBook",
    description: "Master AI tools for business and content creation. Instant digital download + bonus prompts pack.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
    category: "digital",
    badge: "Digital",
    featured: true,
  },
  {
    id: "4",
    name: "Smart Fitness Tracker",
    description: "Track steps, heart rate, sleep. Waterproof and 14-day battery. Great gift item.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
    category: "physical",
  },
  {
    id: "5",
    name: "Social Media Content Pack",
    description: "100 ready-to-post templates for Instagram, TikTok & X. Editable Canva links included. Instant delivery.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=600&fit=crop",
    category: "digital",
    badge: "Digital",
  },
  {
    id: "6",
    name: "Portable Blender Bottle",
    description: "USB rechargeable portable blender. Perfect for protein shakes on the go. Leak-proof design.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=600&fit=crop",
    category: "physical",
  },
  {
    id: "7",
    name: "Dropshipping Mastery Course",
    description: "Complete video course: find winning products, set up stores, scale with ads. Lifetime access.",
    price: 97.00,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=600&fit=crop",
    category: "digital",
    badge: "Premium",
    featured: true,
  },
  {
    id: "8",
    name: "Ergonomic Laptop Stand",
    description: "Aluminum adjustable laptop stand. Improves posture and cooling. Folds flat for travel.",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
    category: "physical",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
