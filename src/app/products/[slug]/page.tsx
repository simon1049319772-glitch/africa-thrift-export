import { notFound } from "next/navigation";
import ProductDetail from "./ProductDetail";
import { getProductBySlug, getRelatedProducts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - AfriThrift`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.categoryId, product.id);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
