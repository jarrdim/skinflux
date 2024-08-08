import prisma from '@/lib/prismadb';




export interface ProductParams {
  category?: string | null;
  searchTerm?: string | null;
}

export default async function getProducts(params: ProductParams) {

    //console.log('Prisma object:', prisma); // Check if prisma is defined


  try {
    const { category, searchTerm } = params;
    let searchString = searchTerm || "";

    let query: any = {};

    if (category) {
      query.category = category;
    }

    //console.log('Prisma Client:', prisma);
    console.log('Query:', query);
    console.log('Search String:', searchString);

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


    return products;
  } catch (error: any) {
    console.error('Error in getProducts:', error);
    throw new Error(error.message);
  }
}
