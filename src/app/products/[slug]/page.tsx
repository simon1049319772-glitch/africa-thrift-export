import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string) {
  return await prisma.product.findUnique({
    where: { slug },
    include: { category: true },
  });
}

async function getRelatedProducts(categoryId: number, excludeId: number) {
  return await prisma.product.findMany({
    where: {
      categoryId,
      id: { not: excludeId },
    },
    include: { category: true },
    take: 4,
  });
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
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
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.categoryId, product.id);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}
