import prisma from '@/lib/prismadb';

export interface ProductParams {
  category?: string | null;
  searchTerm?: string | null;
}

export default async function getProducts(params: ProductParams) {
  const { category, searchTerm } = params;
  let searchString = searchTerm || "";

  let query: any = {};

  if (category) {
    query.category = category;
  }

  // This is where the query is built, no try/catch here
  const products = await prisma.product.findMany({
    include: {
      reviews: true,
    },
    where: {
      ...query,
      OR: [
        {
          name: {
            contains: searchString,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: searchString,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  // Handle the situation where no products are found outside of the fetch logic
  if (!products || products.length === 0) {
    throw new Error('No products found');
  }

  return products;
}
