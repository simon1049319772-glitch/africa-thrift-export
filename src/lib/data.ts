export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  moq: number;
  weight: number | null;
  images: string[];
  categoryId: number;
  categorySlug: string;
  categoryName: string;
  grade: string;
  origin: string;
  stock: number;
  featured: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "T-Shirts",
    slug: "t-shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    productCount: 2,
  },
  {
    id: 2,
    name: "Pants & Jeans",
    slug: "pants",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    productCount: 1,
  },
  {
    id: 3,
    name: "Jackets & Coats",
    slug: "jackets",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    productCount: 1,
  },
  {
    id: 4,
    name: "Shoes",
    slug: "shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    productCount: 1,
  },
  {
    id: 5,
    name: "Dresses",
    slug: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    productCount: 1,
  },
  {
    id: 6,
    name: "Bales (打包货)",
    slug: "bales",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    productCount: 2,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "USA Original T-Shirts Mix",
    slug: "usa-original-tshirts-mix",
    description: "精选美国本土品牌T恤混装，包括Nike、Adidas、H&M、Champion等知名品牌。适合男女不限，尺码齐全。Grade A品质，无明显瑕疵。",
    price: 5.5,
    moq: 50,
    weight: 0.3,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
    ],
    categoryId: 1,
    categorySlug: "t-shirts",
    categoryName: "T-Shirts",
    grade: "A",
    origin: "USA",
    stock: 5000,
    featured: true,
  },
  {
    id: 2,
    name: "European Brand Polo Shirts",
    slug: "european-brand-polo-shirts",
    description: "欧洲高端品牌Polo衫混装，包含Lacoste、Fred Perry、Ralph Lauren等。品质卓越，适合中高端市场。",
    price: 8.0,
    moq: 30,
    weight: 0.4,
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc4e5e40687?w=800",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800",
    ],
    categoryId: 1,
    categorySlug: "t-shirts",
    categoryName: "T-Shirts",
    grade: "A+",
    origin: "Europe",
    stock: 2000,
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Denim Jeans Mix",
    slug: "vintage-denim-jeans-mix",
    description: "复古风格牛仔裤混装，美式工装风、直筒、修身多种款式。适合男装为主，部分女装。尺码28-40。",
    price: 7.5,
    moq: 40,
    weight: 0.8,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    ],
    categoryId: 2,
    categorySlug: "pants",
    categoryName: "Pants & Jeans",
    grade: "A",
    origin: "USA",
    stock: 3000,
    featured: true,
  },
  {
    id: 4,
    name: "Winter Jackets Bundle",
    slug: "winter-jackets-bundle",
    description: "秋冬款夹克外套混装，包含羽绒服、棉服、牛仔外套、皮夹克等。适合寒冷季节销售。",
    price: 15.0,
    moq: 20,
    weight: 1.5,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    ],
    categoryId: 3,
    categorySlug: "jackets",
    categoryName: "Jackets & Coats",
    grade: "A",
    origin: "USA",
    stock: 1000,
    featured: true,
  },
  {
    id: 5,
    name: "Brand Sneakers Mix",
    slug: "brand-sneakers-mix",
    description: "名牌运动鞋混装，包含Nike、Adidas、Puma、New Balance等。尺码38-45，品类齐全。",
    price: 12.0,
    moq: 25,
    weight: 1.0,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800",
    ],
    categoryId: 4,
    categorySlug: "shoes",
    categoryName: "Shoes",
    grade: "A",
    origin: "USA",
    stock: 800,
    featured: true,
  },
  {
    id: 6,
    name: "Women's Summer Dresses",
    slug: "womens-summer-dresses",
    description: "女士夏装连衣裙混装，轻薄透气，款式多样。适合热带地区销售。颜色鲜艳，款式新颖。",
    price: 6.0,
    moq: 40,
    weight: 0.3,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800",
    ],
    categoryId: 5,
    categorySlug: "dresses",
    categoryName: "Dresses",
    grade: "A",
    origin: "Europe",
    stock: 2500,
    featured: true,
  },
  {
    id: 7,
    name: "Premium Used Clothing Bale - 45kg",
    slug: "premium-bale-45kg",
    description: "精选高品质二手服装打包，每包约45kg。包含T恤、裤子、衬衫等各类服装，Grade A品质，随机混装。性价比极高，适合批发。",
    price: 180.0,
    moq: 5,
    weight: 45.0,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    ],
    categoryId: 6,
    categorySlug: "bales",
    categoryName: "Bales",
    grade: "A",
    origin: "USA",
    stock: 200,
    featured: true,
  },
  {
    id: 8,
    name: "Mix Grade Bale - 50kg",
    slug: "mix-grade-bale-50kg",
    description: "混级二手服装打包，每包约50kg。包含各类服装，Grade A/B/C混合。价格实惠，适合走量销售。",
    price: 120.0,
    moq: 10,
    weight: 50.0,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    ],
    categoryId: 6,
    categorySlug: "bales",
    categoryName: "Bales",
    grade: "B",
    origin: "USA",
    stock: 500,
    featured: false,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getRelatedProducts(categoryId: number, excludeId: number): Product[] {
  return products.filter(p => p.categoryId === categoryId && p.id !== excludeId).slice(0, 4);
}
